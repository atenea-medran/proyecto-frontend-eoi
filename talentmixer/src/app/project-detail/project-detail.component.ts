import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from '../interfaces/i-project';
import { UsersService } from '../services/users.service';
import { IUser } from '../interfaces/i-user';

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  project!: IProject;
  user!: IUser;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private usersService: UsersService,
    private directRoute: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    console.log(id)
    this.projectsService.getProject(id).subscribe((project) => {
      this.project = project;
      this.usersService.getUser(this.project.idUserAccount!).subscribe((user) => {
        this.user = user;
      });

    });
  }


  @Output() projectDeleted = new EventEmitter<any>();

  deleteCard() {
    this.projectsService.deleteProject(<number>this.project.id)
      .subscribe(() => this.projectDeleted.emit(this.project));
    this.goBack();
  }

  editCard() {}

  goBack() {
    this.directRoute.navigate(['/products']);
  }
}
