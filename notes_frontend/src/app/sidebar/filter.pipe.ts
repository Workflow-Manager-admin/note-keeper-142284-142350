import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../note.model';

// PUBLIC_INTERFACE
@Pipe({ name: 'filter', standalone: true })
export class FilterPipe implements PipeTransform {
  transform(notes: Note[], search: string): Note[] {
    if (!notes || !search) return notes;
    const term = search.trim().toLowerCase();
    return notes.filter(n =>
      (n.title && n.title.toLowerCase().includes(term)) ||
      (n.content && n.content.toLowerCase().includes(term))
    );
  }
}
