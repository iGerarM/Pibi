import { Component, OnInit } from '@angular/core';
import { TabService } from '../../shared/service/left-sidebar/left-sidebar.service';
import { ContactComponent } from './contact/contact.component';
import { CallTabComponent } from './call-tab/call-tab.component';
import { ChatTabComponent } from './chat-tab/chat-tab.component';

@Component({
    selector: 'app-chat-board',
    templateUrl: './chat-board.component.html',
    styleUrls: ['./chat-board.component.scss'],
    imports: [ChatTabComponent, CallTabComponent, ContactComponent]
})
export class ChatBoardComponent  implements OnInit {
  public tabId: number = 1  ;
  public isActive: boolean = true;

  constructor(public tabService: TabService) {}

  ngOnInit() {
    this.tabService.tabIdSubject.subscribe((divId: number) => {
      this.tabId = divId;
    });
  }
}