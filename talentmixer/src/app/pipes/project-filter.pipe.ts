import { Pipe, PipeTransform } from '@angular/core';
import { IProject } from '../interfaces/i-project';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

  transform(projectsArray: IProject[], search:string): IProject[] {
    if(search) {
      return projectsArray.filter(
        project => project.tittle.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                   project.description.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                   project.summary.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    }
    return projectsArray;
  }

}
