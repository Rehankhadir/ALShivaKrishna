import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-off-canvas',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf],
  templateUrl: './off-canvas.component.html',
  styleUrl: './off-canvas.component.css'
})
export class OffCanvasComponent {
  toastr = inject(ToastrService)
  showOffcanvas = false;
  progress = 0;
  interval: any;
  showOffcanvasloader = false;
  

  startMigration() {
    this.showOffcanvas = true;
    this.showOffcanvasloader = true;
    this.progress = 0;

    // Start the progress bar
    this.interval = setInterval(() => {
      this.progress += 1;
      if (this.progress > 100) {
        clearInterval(this.interval);
        this.showOffcanvas = false;
        this.toastr.success('Migration applied successfully', 'success', {positionClass : "toast-bottom-right"})
      }
    }, 100); // Adjust the speed as necessary
    
  }

  toggleOffcanvas() {
    this.showOffcanvasloader = !this.showOffcanvasloader;
  }

}

