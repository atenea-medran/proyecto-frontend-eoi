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

  @Output() projectDeleted = new EventEmitter<any>();

  projects: IProject[] = [];

  constructor(private projectsService : ProjectsService) {}

  deleteProject() {
    this.projectsService.deleteProject(<number>this.project.id).subscribe(
      () => { this.projectDeleted.emit(this.project);
      });
  }
}
