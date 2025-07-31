import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrl: 'sidebar.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe],
})
export class SidebarComponent implements OnInit {
  @Input() activeId?: string;
  @Output() selectNote = new EventEmitter<string>();
  @Output() addNote = new EventEmitter<void>();
  @Output() searchNotes = new EventEmitter<string>();

  searchString: string = '';
  notes: Note[] = [];

  ngOnInit() {
    // Static display, notes loaded externally
  }

  select(id: string) {
    this.selectNote.emit(id);
  }

  addNew() {
    this.addNote.emit();
  }

  onSearchChange() {
    this.searchNotes.emit(this.searchString);
  }

  clearSearch() {
    this.searchString = '';
    this.onSearchChange();
  }
}
