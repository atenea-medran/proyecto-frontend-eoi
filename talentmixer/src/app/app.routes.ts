import { Route } from "@angular/router";
import { AddProjectComponent } from "./add-project/add-project.component";
import { ProjectListComponent } from "./project-list/project-list.component";


export const APP_ROUTES:Route[]=[
  // { path: 'about', component: WelcomeComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'new', component: AddProjectComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: '**', redirectTo: '/projects', pathMatch: 'full' }

];
