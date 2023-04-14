import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IUser } from '../interfaces/i-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL = "users";
  constructor(private http: HttpClient) { }

  getUsers():Observable<IUser[]> {
    return this.http.get<IUser[]>(this.URL);
  }

  getUser(idUser:number):Observable<IUser>{
    return this.http.get<IUser>(this.URL+"/"+idUser);
  }

  addUser(user:IUser):Observable<IUser> {
    return this.http.post<{user:IUser,mensaje:string}>(this.URL,user).pipe(
      map(response => {
        console.log(response.mensaje);
        return response.user;
      }),
      catchError((respuesta:HttpErrorResponse)=>throwError(()=>
      new Error("Error al insertar la imagen. Respuesta Server:"+respuesta.status+" "+respuesta.message+" "))
      ));
  }

  updateUser(user:IUser):Observable<IUser>{
    return this.http.put<{user:IUser,mensaje:string}>(this.URL+"/"+user.id,user).pipe(
      map(response=>{
        console.log(response.mensaje);
        return response.user;
      }),
      catchError((respuesta:HttpErrorResponse)=>throwError(()=>
      new Error("Error al insertar la imagen. Respuesta Server:"+respuesta.status+" "+respuesta.message+" "))
      ));
  }

  deleteUser(idUser:number):Observable<number>{
    return this.http.delete<{user:number}>(this.URL+"/"+idUser).pipe(
      map(response=>response.user)
    );
  }
}
