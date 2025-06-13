import { Component, ViewChild } from '@angular/core';
import { ReminderModalComponent } from './reminder-modal/reminder-modal.component';
import { CloseAppsComponent } from '../close-apps/close-apps.component';

@Component({
    selector: 'app-reminder',
    templateUrl: './reminder.component.html',
    styleUrls: ['./reminder.component.scss'],
    imports: [CloseAppsComponent, ReminderModalComponent]
})
export class ReminderComponent {
  @ViewChild("reminderModal")reminderModal!: ReminderModalComponent;

}
