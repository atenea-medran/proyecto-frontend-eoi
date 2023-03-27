import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsService } from './services/projects.service';
import { ProjectFilterPipe } from './pipes/project-filter.pipe';
import { FormsModule } from '@angular/forms';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { AddProjectComponent } from './add-project/add-project.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectCardComponent,
    ProjectFilterPipe,
    AddProjectComponent,
    ProjectDetailComponent,
    LoginComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ProjectsService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: BaseUrlInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
