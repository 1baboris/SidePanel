import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-panel.component.html',
  styleUrl: './slide-panel.component.css',
})
export class SlidePanelComponent {
  @Input() openSlidePanel = false;
}
