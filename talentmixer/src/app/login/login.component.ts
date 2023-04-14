import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser } from '../interfaces/i-user';
import { UsersService } from '../services/users.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit() {
    this.instantiateUser();
  }

  @Output() loggedIn = new EventEmitter<any>();

  user!: IUser;

  instantiateUser() {
    this.user = {
      username: '',
      userPassword: '',
      firstName: '',
      surname: '',
      email: '',
      projects: []
    };
  }

  constructor(private usersService: UsersService,
    public globalService: GlobalService) {}

  users: IUser[] = [];
  successVisible: number = 0;

  login() {
    this.usersService.getUsers().subscribe(usersFromServer => {
      usersFromServer.forEach((user) => {
        if (
          user.username == this.user.username &&
          user.userPassword == this.user.userPassword
        ) {
          this.globalService.user = user;
          this.globalService.logged = true;
          this.successVisible = 1;
        }
        if(!this.globalService.logged) this.successVisible = 2;

      });
    });
  }
}
