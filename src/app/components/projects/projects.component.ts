import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProjectEntity } from 'src/app/shared/entity/project.entity';
import { ProjectsService } from 'src/app/shared/services/projects.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf, NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectEntity[] | undefined;

  constructor( 
    private projectServ: ProjectsService,
  ) {}

  ngOnInit() {
    this.projects = this.projectServ.getProjects;
  }

}
