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
  successVisible: boolean = false;

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

  register() {
    console.log('Try register');
    this.usersService.addUser(this.user).subscribe((user) => {
      console.log(user);
    });
    this.instantiateUser();
    this.successVisible = !this.successVisible;
  }
}
