import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { IUser } from '../interfaces/i-user';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { IProject } from '../interfaces/i-project';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user!: IUser;

  constructor(
    public globalService: GlobalService,
    private usersService: UsersService,
    private route: ActivatedRoute
    ) {}


  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.usersService.getUser(id).subscribe((user) => {
      this.user = user;
    });
    this.user.projects.forEach((project) => { console.log(project) });

  }

  buildProjects() {
    this.user.projects.forEach
  }

  deleteUser() {
    console.log("Hola")
  }
  
}
