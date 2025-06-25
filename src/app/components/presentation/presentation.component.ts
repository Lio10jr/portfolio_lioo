import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  standalone: true,
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent {

    openLink(url: string) {
      window.open(url, '_blank');
    }
}
