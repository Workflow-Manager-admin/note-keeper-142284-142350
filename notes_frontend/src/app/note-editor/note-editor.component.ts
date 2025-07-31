import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-editor',
  templateUrl: 'note-editor.component.html',
  styleUrl: 'note-editor.component.css',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class NoteEditorComponent {}
