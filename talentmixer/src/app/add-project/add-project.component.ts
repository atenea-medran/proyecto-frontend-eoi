import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProject } from '../interfaces/i-project';
import { ProjectsService } from '../services/projects.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  ngOnInit() {
    this.instantiateProject();
  }

  newProject!: IProject;

  instantiateProject() {
    this.newProject = {
      title:"",
      summary: "",
      description: "",
      createdAt: new Date(),
      image: undefined,
      idUserAccount: this.globalService.user.id
    };
  }

  constructor(private projectsService:ProjectsService, public globalService: GlobalService){}


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

  previsualizeImage(fileInput: HTMLInputElement) {

    if (!fileInput.files || fileInput.files.length === 0) {
     return;
    }

    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      this.newProject.image = reader.result as string;
      console.log(this.newProject.image)
    });

  }
}


