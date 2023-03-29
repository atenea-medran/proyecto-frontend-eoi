import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { IUser } from '../interfaces/i-user';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user!: IUser;
  logged!: boolean;

  constructor(public globalService: GlobalService,private router: Router) {}

  ngOnInit() {
    this.user = this.globalService.user;
  }

  logout() {
    this.globalService.logged = false;
    this.router.navigate(['/projects']);
  }

}
