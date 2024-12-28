import { Component, Input } from '@angular/core';
import { ProjectEntity } from '../../entity/project.entity';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() item!: ProjectEntity;
  @Input() i!: number;
}
