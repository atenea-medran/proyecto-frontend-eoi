// import { Component, EventEmitter, Output } from '@angular/core';
// import { IProject } from '../interfaces/i-project';
// import { ProjectsService } from '../services/projects.service';

// @Component({
//   selector: 'edit-project',
//   templateUrl: './edit-project.component.html',
//   styleUrls: ['./edit-project.component.css']
// })
// export class EditProjectComponent {

//   ngOnInit(): void {
//     this.instantiateProject();
//   }

//   project!: IProject;

//   // instantiateProject() {
//   //   this.project = {
//   //     tittle:"",
//   //     summary: "",
//   //     description: "",
//   //     createdAt: new Date(),
//   //     image: undefined
//   //   };
//   // }
//   instantiateProject() {
//     this.project = {
//       tittle:"",
//       summary: "",
//       description: "",
//       createdAt: new Date(),
//       image: undefined
//     };
//   }

//   constructor(private projectsService:ProjectsService) {}

//   @Output() newProjectEmitted = new EventEmitter<IProject>();

//   addProject() {
//     this.projectsService.addProject(this.newProject).subscribe(
//       project => {
//         this.newProjectEmitted.emit(project);
//         this.instantiateProject();
//       }
//     )
//     this.successVisible = !this.successVisible;
//   }

//   successVisible: boolean = false;

//   editProject(idEvento:number) {
//     this.projectsService.getProject(idEvento).subscribe((project) => {
//       this.newProject.tittle = project.tittle;
//       this.newProject.summary = project.summary;
//       this.newProject.description = project.description;
//       this.newProject.image = project.image;

//       this.successVisible = !this.successVisible;

//     });
//   }

//   changeImage(fileInput: HTMLInputElement) {

//     if (!fileInput.files || fileInput.files.length === 0) {
//      return;
//     }

//     const reader: FileReader = new FileReader();
//     reader.readAsDataURL(fileInput.files[0]);
//     reader.addEventListener('loadend', (e) => {
//       /*if(reader.result!=null)
//         this.newEvent.image = reader.result.toString();
//       else
//       this.newEvent.image = "";*/
//       this.newProject.image = reader.result as string;
//     });

//   }
// }


