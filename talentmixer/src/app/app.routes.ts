import { Route } from "@angular/router";
import { AddProjectComponent } from "./add-project/add-project.component";
import { ProjectListComponent } from "./project-list/project-list.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";


export const APP_ROUTES:Route[]=[
  // { path: 'about', component: WelcomeComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'new', component: AddProjectComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: '**', redirectTo: '/projects', pathMatch: 'full' }

];
