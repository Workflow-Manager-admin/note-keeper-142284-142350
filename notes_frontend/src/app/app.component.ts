import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [CommonModule, SidebarComponent, RouterOutlet],
})
export class AppComponent {
  selectedNoteId: string | undefined = undefined;

  constructor(private router: Router) {}

  // PUBLIC_INTERFACE
  onNoteSelected(id: string) {
    this.selectedNoteId = id;
    this.router.navigate(['/notes', id]);
  }

  // PUBLIC_INTERFACE
  onAddNote() {
    this.selectedNoteId = undefined;
    this.router.navigate(['/add']);
  }
}
