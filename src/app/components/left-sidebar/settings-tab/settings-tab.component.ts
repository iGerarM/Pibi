import { Component, EventEmitter, Output } from '@angular/core';
import * as statusData from '../../../shared/data/component/leftsidebar/leftsidebar';
import { HelpComponent } from './help/help.component';
import { IntegratinComponent } from './integratin/integratin.component';
import { ChatComponent } from './chat/chat.component';
import { AccountComponent } from './account/account.component';
import { ProfileBoxComponent } from './profile-box/profile-box.component';

@Component({
    selector: 'app-settings-tab',
    templateUrl: './settings-tab.component.html',
    styleUrls: ['./settings-tab.component.scss'],
    imports: [
        ProfileBoxComponent,
        AccountComponent,
        ChatComponent,
        IntegratinComponent,
        HelpComponent,
    ]
})
export class SettingsTabComponent {
  @Output() buttonClicked = new EventEmitter<boolean>();

  public settings = statusData.settings;
  public isActive: boolean = false;

  constructor() {}
   
  handleClick() {
    this.isActive = true;
    this.buttonClicked.emit(true);
  }
}
