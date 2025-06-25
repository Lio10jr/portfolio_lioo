import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent {

    openLink(url: string) {
      window.open(url, '_blank');
    }
}
