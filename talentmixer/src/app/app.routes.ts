import { Route } from "@angular/router";
import { AddProjectComponent } from "./add-project/add-project.component";
import { ProjectListComponent } from "./project-list/project-list.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { EditProjectComponent } from "./edit-project/edit-project.component";
import { RegisterComponent } from "./register/register.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";


export const APP_ROUTES:Route[] = [
  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'new', component: AddProjectComponent },
  { path: 'edit/:id', component: EditProjectComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserDetailComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: '**', redirectTo: '/projects', pathMatch: 'full' }
];
