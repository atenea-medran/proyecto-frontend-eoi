import { Injectable } from '@angular/core';
import { IUser } from './interfaces/i-user';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  username!: string;
  userPassword!: string;
  user!: IUser;
  logged: boolean = false;
}
