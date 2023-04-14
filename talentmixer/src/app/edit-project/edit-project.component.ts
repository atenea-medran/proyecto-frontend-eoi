import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProject } from '../interfaces/i-project';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../services/global.service';

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
      idUserAccount: this.globalService.user.id
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
      if (project.image != null)
        this.editedProject.image = project.image;
      else
        this.editedProject.image = undefined;
    });
  }

  updateProject() {
    this.projectsService.updateProject(this.editedProject).subscribe(
      project => {
        this.instantiateProject();
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
      this.editedProject.image = reader.result as string;
    });

  }
}


