import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProject } from '../interfaces/i-project';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})

export class ProjectCardComponent {
  @Input() project!:IProject;

  @Output() deleteProjectEmitter=new EventEmitter<void>();


  projects: IProject[] = [];

  constructor(private projectsService : ProjectsService) {}

  deleteCard(){
    this.projectsService.deleteProject(<number>this.project.id).subscribe({
      next:deleted=>{
        console.log("Filas eliminadas:" + deleted);
        this.deleteProjectEmitter.emit();
      },
      error:error=>console.log(error)
    });
    location.reload();
  }
}
