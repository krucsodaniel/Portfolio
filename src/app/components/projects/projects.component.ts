import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects$: Observable<any[]>;

  constructor(private projectsService: ProjectsService) { 

    this.projects$ = this.projectsService.getProjects();

  }



  ngOnInit(): void {

  }

}
