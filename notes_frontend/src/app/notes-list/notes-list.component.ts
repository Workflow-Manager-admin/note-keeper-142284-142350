import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-notes-list',
  templateUrl: 'notes-list.component.html',
  styleUrl: 'notes-list.component.css',
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe],
})
export class NotesListComponent {}
