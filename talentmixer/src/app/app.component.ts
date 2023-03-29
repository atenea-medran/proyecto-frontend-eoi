import { Component, OnInit } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Talentmixer';
  constructor(private globalService: GlobalService) {
    this.globalService.user;
    this.globalService.logged = false;
  }
}
