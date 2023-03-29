import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProject } from '../interfaces/i-project';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  ngOnInit() {
    this.getProject();
  }

  editedProject!: IProject;

  instantiateProject() {
    this.editedProject = {
      title:"",
      summary: "",
      description: "",
      createdAt: new Date(),
      image: undefined,
      /* CUIDADOOOOOO */      idUserAccount: 1
    };
  }

  constructor(private projectsService:ProjectsService,
    private route: ActivatedRoute, public globalService: GlobalService) {}


  getProject() {
    const id = +this.route.snapshot.params['id'];
    this.projectsService.getProject(id).subscribe((project) => {
      this.editedProject = project;
      this.editedProject.title = project.title;
      this.editedProject.summary = project.summary;
      this.editedProject.description = project.description;
      this.editedProject.image = undefined;
    });
  }

  updateProject() {
    console.log(this.editedProject)
    this.projectsService.updateProject(this.editedProject).subscribe(
      project => {
        this.instantiateProject();
        console.log(project)
      })
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
      this.editedProject.image = reader.result as string;
    });

  }
}


