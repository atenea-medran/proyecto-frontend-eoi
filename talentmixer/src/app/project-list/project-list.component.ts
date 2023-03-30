import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { IProject } from '../interfaces/i-project';
import { GlobalService } from '../services/global.service';


@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(private service:ProjectsService,
    public globalService: GlobalService){}

  projects: IProject[] = [];

  ngOnInit() {
    console.log(this.globalService.user);
    this.service.getProjects().subscribe(
      projectsFromServer => {
        this.projects = projectsFromServer.map(project => ({
          ...project,
          createdAt: new Date(project.createdAt)
        }));
      }
    );
  }

 search = "";


  orderDate() {
    this.search="";
    this.projects.sort((project1,project2)=>project1.createdAt.getTime()-project2.createdAt.getTime());
  }

  updateCardList(deletedProject:IProject) {
    this.projects = this.projects.filter(project=>project!=deletedProject);
  }

}
