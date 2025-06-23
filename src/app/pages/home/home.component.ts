import { Component, OnInit } from '@angular/core';
import { PresentationComponent } from 'src/app/components/presentation/presentation.component';
import { ProjectEntity } from 'src/app/shared/entity/project.entity';
import { ProjectsService } from 'src/app/shared/services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  itemSelected: any;
  list: ProjectEntity[] = [];
  selectedIndex: number | null = null;

  constructor(
    private projectService: ProjectsService
  ){ }

  ngOnInit() {
    this.list = this.projectService.getProjects.filter( pro => pro.priority );
    this.itemSelected = this.list[0];
    this.selectedIndex = 0;
  }

  itemSelect(i: number) {
    this.itemSelected = this.list[i];
    this.selectedIndex = i;
  }
}
