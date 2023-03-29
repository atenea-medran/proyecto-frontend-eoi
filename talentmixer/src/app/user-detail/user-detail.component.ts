import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { IUser } from '../interfaces/i-user';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(public globalService: GlobalService){}

  ngOnInit() {
    console.log("Hola")
  }

  user!: IUser;
  deleteUser() {
    console.log("Hola")
  }
}
