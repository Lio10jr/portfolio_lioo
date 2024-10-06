import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent {

  public menuList = [
    { title: 'Home', path: '/home' },
    // { title: 'Projects', path: '/projects' }
  ]
}
