import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { IProject } from '../interfaces/i-project';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(private service:ProjectsService){}

  projects: IProject[] = [];

  ngOnInit() {
    console.log("ngOnInit");
    this.service.getProjects().subscribe(
      projectsFromServer => {
        this.projects = projectsFromServer.map(project => ({
          ...project,
          createdAt: new Date(project.createdAt)
        }));
      }
    );
  }

  @Input() search: string = "";


  orderDate() {
    this.search="";
    this.projects.sort((project1,project2)=>project2.createdAt.getTime()-project1.createdAt.getTime());
  }

  deleteCard(project:IProject) {
    this.projects=this.projects.filter(pr=>pr!=project);
  }

}
