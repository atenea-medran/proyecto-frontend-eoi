import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProject } from '../interfaces/i-project';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  ngOnInit(): void {
    this.instantiateProject();
  }

  newProject!: IProject;

  instantiateProject() {
    this.newProject = {
      tittle:"",
      summary: "",
      description: "",
      createdAt: new Date(),
      image: undefined
    };
  }

  constructor(private projectsService:ProjectsService) {}

  @Output() newProjectEmitted = new EventEmitter<IProject>();

  addProject() {
    this.projectsService.addProject(this.newProject).subscribe(
      project => {
        this.newProjectEmitted.emit(project);
        this.instantiateProject();
      }
    )
    this.successVisible = !this.successVisible;
  }

  successVisible: boolean = false;

  changeImage(fileInput: HTMLInputElement) {

    if (!fileInput.files || fileInput.files.length === 0) {
     return;
    }

    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      /*if(reader.result!=null)
        this.newEvent.image = reader.result.toString();
      else
      this.newEvent.image = "";*/
      this.newProject.image = reader.result as string;
    });

  }
}


