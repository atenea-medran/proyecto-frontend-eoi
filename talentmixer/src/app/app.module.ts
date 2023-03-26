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

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectCardComponent,
    ProjectFilterPipe,
    AddProjectComponent,
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
