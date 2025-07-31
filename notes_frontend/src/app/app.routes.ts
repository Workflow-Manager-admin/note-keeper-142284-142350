import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./notes-list/notes-list.component').then(
        (c) => c.NotesListComponent
      ),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./note-editor/note-editor.component').then(
        (c) => c.NoteEditorComponent
      ),
  },
  {
    path: 'notes/:id',
    loadComponent: () =>
      import('./note-editor/note-editor.component').then(
        (c) => c.NoteEditorComponent
      ),
  },
  { path: '**', redirectTo: '' }
];
