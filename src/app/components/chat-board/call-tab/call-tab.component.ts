import { Component } from '@angular/core';
import * as data from '../../../shared/data/component/chat-board/chat-board';
import { SharedDocumentComponent } from './shared-document/shared-document.component';
import { UserContentComponent } from './user-content/user-content.component';

@Component({
    selector: 'app-call-tab',
    templateUrl: './call-tab.component.html',
    styleUrls: ['./call-tab.component.scss'],
    imports: [UserContentComponent, SharedDocumentComponent]
})
export class CallTabComponent {
  public callLogs = data.callLogs;

}
