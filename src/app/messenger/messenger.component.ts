import { Component } from '@angular/core';
import { MainNavService } from '../shared/service/main-nav/main-nav.service';
import { RightSidebarComponent } from '../components/right-sidebar/right-sidebar.component';
import { ChatBoardComponent } from '../components/chat-board/chat-board.component';
import { LeftSidebarComponent } from '../components/left-sidebar/left-sidebar.component';
import { MainNavComponent } from '../components/main-nav/main-nav.component';
import { LayoutService } from '../shared/service/layout.service';

@Component({
    selector: 'app-messenger',
    templateUrl: './messenger.component.html',
    styleUrls: ['./messenger.component.scss'],
    imports: [MainNavComponent, LeftSidebarComponent, ChatBoardComponent, RightSidebarComponent]
})
export class MessengerComponent {

  constructor(public layoutService: LayoutService, public mainNavService: MainNavService ) {
  }

}
