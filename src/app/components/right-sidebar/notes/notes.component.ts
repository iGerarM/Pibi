import { Component, ViewChild } from '@angular/core';
import { NotesModalComponent } from './notes-modal/notes-modal.component';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';
import { CloseAppsComponent } from '../close-apps/close-apps.component';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss'],
    imports: [CloseAppsComponent, FeatherIconsComponent, NotesModalComponent]
})
export class NotesComponent {
  @ViewChild("notesModal")notesModal!: NotesModalComponent;

}
