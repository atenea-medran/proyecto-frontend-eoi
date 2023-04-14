import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/i-user';
import { UsersService } from '../services/users.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  ngOnInit() {
    this.instantiateUser();
  }

  user!: IUser;
  successVisible: number = 0;

  instantiateUser() {
    this.user = {
      username: '',
      userPassword: '',
      firstName: '',
      surname: '',
      email: '',
      projects: [],
    };
  }

  constructor(
    private usersService: UsersService,
    public globalService: GlobalService
  ) {}

  userExists: boolean = false;
  register() {
    this.usersService.getUsers().subscribe((usersFromServer) => {
      usersFromServer.forEach((user) => {
        if (user.username === this.user.username) {
          this.successVisible = 2;
          this.userExists = true;
        }
      });
      if (!this.userExists) {
        this.usersService.addUser(this.user).subscribe((user) => {});
        this.instantiateUser();
        this.successVisible = 1;
      } else {
        this.userExists = false;
      }
    });
  }
}
