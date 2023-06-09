import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProject } from '../interfaces/i-project';
import { ProjectsService } from '../services/projects.service';
import { UsersService } from '../services/users.service';
import { IUser } from '../interfaces/i-user';
import { GlobalService } from '../services/global.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})

export class ProjectCardComponent implements OnInit {
  @Input() project!:IProject;

  @Output() projectDeleted = new EventEmitter<any>();

  user!: IUser;
  userDetail: boolean = false;

  constructor(private projectsService : ProjectsService,
    private usersService: UsersService,
    public globalService: GlobalService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    if (+this.route.snapshot.params["id"]) {
      this.userDetail = true;
    }

    this.usersService.getUser(this.project.idUserAccount!).subscribe((user) => {
      this.user = user;
    });

    }
  deleteProject() {
    this.projectsService.deleteProject(<number>this.project.id).subscribe(
      () => { this.projectDeleted.emit(this.project);
      });
  }
}
