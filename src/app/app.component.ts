import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlidePanelComponent } from './shared/slide-panel/slide-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SlidePanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isSlidePanelOpen = false;

  openSlidePanel() {
    this.isSlidePanelOpen = true;
  }

  closeSlidePanel() {
    this.isSlidePanelOpen = false;
  }
}
