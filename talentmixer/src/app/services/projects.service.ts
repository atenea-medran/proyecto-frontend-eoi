import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProject } from '../interfaces/i-project';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  private URL = "projects";
  constructor(private http: HttpClient) { }

  getProjects():Observable<IProject[]> {
    return this.http.get<IProject[]>(this.URL)
    .pipe(map(response=>response));
  }

  addProject(project:IProject):Observable<IProject>{
    return this.http.post<IProject>(this.URL,project).pipe(
      map(response=>{return response;}));
  }

  deleteProject(idEvento:number):Observable<number>{
    return this.http.delete<{evento:number}>(this.URL+"/"+idEvento).pipe(
      map(response=>response.evento)
    );
  }
}
