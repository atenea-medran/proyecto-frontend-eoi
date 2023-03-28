export interface IProject {
  id?:number;
  title: string;
  summary: string;
  description: string;
  createdAt: Date;
  image?: string;
  idUserAccount?: number;
}
