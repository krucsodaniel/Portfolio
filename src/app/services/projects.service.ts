import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects: Array<any> = [
    {
      projectId: "1",
      projectPicture: "../../../assets/project-pictures/delta-school/deltaschool-1.jpg",
      projectName: "Delta School",
      projectDescription: "Lorem ipsum ipsum lorem",
      projectContent: "Lorem ipsum ipsum lorem, Lorem ipsum ipsum lorem, Lorem ipsum ipsum lorem, Lorem ipsum ipsum lorem, Lorem ipsum ipsum lorem, Lorem ipsum ipsum lorem"
    },
    {
      projectId: "2",
      projectPicture: "../../../assets/project-pictures/task-manager/task-manager-1.jpg",
      projectName: "Task Manager",
      projectContent: "Lorem ipsum ipsum lorem, Lorem ipsum ipsum lorem, Lorem ipsum ipsum lorem, Lorem ipsum ipsum lorem, Lorem ipsum ipsum lorem, Lorem ipsum ipsum lorem"
    }
  ];

  getProjects(): Observable<any[]> {
    return of(this.projects);
  }



}
