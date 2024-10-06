import { Component } from '@angular/core';
import { ProjectsService } from 'src/app/shared/services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private projectService: ProjectsService
  ){}
  openLink(url: string) {
    window.open(url, '_blank');
  }

  getListProject() {
    const list = this.projectService.getProjects;
    return list;
  }
}
