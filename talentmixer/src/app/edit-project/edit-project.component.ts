import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProject } from '../interfaces/i-project';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  projects: IProject[] = [];

  ngOnInit() {
    console.log("ngOnInit");
    this.projectsService.getProjects().subscribe(
      projectsFromServer => {
        this.projects = projectsFromServer.map(project => ({
          ...project,
          createdAt: new Date(project.createdAt)
        }));

        const projectId = +this.route.snapshot.params['id']
        const existingProject = this.projects.find(p => p.id === projectId);

        if (existingProject) {
          this.instantiateProject(existingProject);
        }
      }
    );
  }

  newProject!: IProject;

  instantiateEmptyProject() {
    this.newProject = {
      tittle:"",
      summary: "",
      description: "",
      createdAt: new Date(),
      image: undefined
    };
  }

  instantiateProject(existingProject: IProject) {
    this.newProject = {
      tittle: existingProject.tittle,
      summary: existingProject.summary,
      description: existingProject.description,
      createdAt: existingProject.createdAt,
      image: existingProject.image
    };
  }

  constructor(private projectsService: ProjectsService,private route: ActivatedRoute) {}

  @Output() newProjectEmitted = new EventEmitter<IProject>();

  editProject() {
    this.projectsService.editProject(this.newProject).subscribe(
      project => {
        this.newProjectEmitted.emit(project);
        this.instantiateEmptyProject();
      }
    )
  }

  successVisible: boolean = false;

  changeImage(fileInput: HTMLInputElement) {

    if (!fileInput.files || fileInput.files.length === 0) {
     return;
    }

    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      /*if(reader.result!=null)
        this.newEvent.image = reader.result.toString();
      else
      this.newEvent.image = "";*/
      this.newProject.image = reader.result as string;
    });

  }
}


