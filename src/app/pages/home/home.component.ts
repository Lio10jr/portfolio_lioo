import { Component, OnInit } from '@angular/core';
import { PresentationComponent } from 'src/app/components/presentation/presentation.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PresentationComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

}
