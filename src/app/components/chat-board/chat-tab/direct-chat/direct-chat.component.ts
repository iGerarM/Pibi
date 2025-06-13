import { Component, OnInit, OnDestroy } from '@angular/core';
import { TabService } from './../../../../shared/service/left-sidebar/left-sidebar.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChatBoardService } from '../../../../shared/service/chat-board/chat-board.service';
import { LayoutService } from '../../../../shared/service/layout.service';
import { LeftHeaderComponent } from '../left-header/left-header.component';
import { RightHeaderComponent } from '../right-header/right-header.component';
import { ChatMessageService, ChatMessage } from '../../../../shared/service/chat-board/chat-message.service';

@Component({
    selector: 'app-direct-chat',
    templateUrl: './direct-chat.component.html',
    styleUrls: ['./direct-chat.component.scss'],
    imports: [FormsModule, CommonModule, LeftHeaderComponent, RightHeaderComponent]
})
export class DirectChatComponent implements OnInit, OnDestroy {
  public activeChat: any;
  public chatData: any = { chat: [] };
  public activeTab: number = 0;
  public open: boolean = false;
  private subscription: Subscription;
  private messageSubscription: Subscription;

  constructor(
    private tabService: TabService,
    private chatBoardService: ChatBoardService,
    private chatMessageService: ChatMessageService,
    public layoutService: LayoutService
  ) {
    this.subscription = this.chatBoardService.openSearch$.subscribe((open: boolean) => {
      this.open = open;
    });
  }

  ngOnInit(): void {
    this.tabService.activeChat$.subscribe((chat) => {
      this.activeChat = chat || {};
    });
    
    this.tabService.activeChat$.subscribe((chat) => {
      this.chatData = chat || { chat: [] };
    });

    // Suscribirse a los mensajes del servicio
    this.messageSubscription = this.chatMessageService.messages$.subscribe(messages => {
      if (this.chatData && this.chatData.chat) {
        this.chatData.chat = [...messages];
      }
    });
  }

  closeSearch() {
    this.open = false;
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }
}
