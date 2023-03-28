import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Talentmixer';
  search = "";

  ngOnInit() {
    console.log("Main app iniciando");
    (<any>window).mainApp = this;
  }

  loginVisible = false;
  showLogging() {
    this.loginVisible = true;
  }
}
