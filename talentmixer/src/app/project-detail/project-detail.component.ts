import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from '../interfaces/i-project';

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project!: IProject;
  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private directRoute: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.projectsService.getProject(id).subscribe({
      next: project => { this.project = project; },
      error: error => console.log(error)
    }
    );
  }

  @Output() projectDeleted =new EventEmitter<any>();

  deleteCard(){
    this.projectsService.deleteProject(<number>this.project.id).subscribe({
      next:deleted=>{
        console.log("Filas eliminadas:" + deleted);
        this.projectDeleted.emit(this.project);
      },
      error:error=>console.log(error)
    });
    this.goBack();
  }

  goBack(){
    this.directRoute.navigate(['/products']);
  }

}