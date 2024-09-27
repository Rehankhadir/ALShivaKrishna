import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OffCanvasComponent } from '../off-canvas/off-canvas/off-canvas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OffCanvasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'offcanvas-popup';
}
