import { IProject } from "./i-project";

export interface IUser {
  id?:number;
  username: string;
  userPassword: string;
  firstName: string;
  surname: string;
  email: string;
  projects: IProject[];
}
