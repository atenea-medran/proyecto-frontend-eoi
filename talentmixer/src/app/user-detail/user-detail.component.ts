import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { IUser } from '../interfaces/i-user';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';

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
    console.log(this.user);

  }

  deleteUser() {
    console.log("Hola")
  }
}
