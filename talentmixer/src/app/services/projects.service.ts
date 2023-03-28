import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IProject } from '../interfaces/i-project';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  private URL = "projects";
  constructor(private http: HttpClient) { }

  getProjects():Observable<IProject[]> {
    return this.http.get<IProject[]>(this.URL);
  }

  getProject(idProject:number):Observable<IProject>{
    return this.http.get<IProject>(this.URL+"/"+idProject);
  }

  addProject(project:IProject):Observable<IProject> {
    return this.http.post<IProject>(this.URL,project);
  }

  // updateProject(project:IProject):Observable<IProject> {
  //   return this.http.put<IProject>(this.URL+"/"+project.id,project);
  // }

  updateProject(project:IProject):Observable<IProject>{
    return this.http.put<{project:IProject,mensaje:string}>(this.URL+"/"+project.id,project).pipe(
      map(response=>{
        console.log(response.mensaje);
        return response.project;
      }),
      catchError((respuesta:HttpErrorResponse)=>throwError(()=>
      new Error("Error al insertar la imagen. Respuesta Server:"+respuesta.status+" "+respuesta.message+" "))
      ));
  }

  deleteProject(idProject:number):Observable<number>{
    return this.http.delete<{project:number}>(this.URL+"/"+idProject).pipe(
      map(response=>response.project)
    );
  }
}
