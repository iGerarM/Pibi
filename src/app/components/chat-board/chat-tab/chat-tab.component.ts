import { LayoutService } from './../../../shared/service/layout.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TabService } from '../../../shared/service/left-sidebar/left-sidebar.service';
import { Subscription } from 'rxjs';
import { FooterComponent } from './footer/footer.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { DirectChatComponent } from './direct-chat/direct-chat.component';
import { NgClass } from '@angular/common';
import { ChatBoardService } from '../../../shared/service/chat-board/chat-board.service';
import { ChatMessageService, ChatMessage } from '../../../shared/service/chat-board/chat-message.service';

@Component({
    selector: 'app-chat-tab',
    templateUrl: './chat-tab.component.html',
    styleUrls: ['./chat-tab.component.scss'],
    imports: [NgClass, DirectChatComponent, GroupChatComponent, FooterComponent]
})
export class ChatTabComponent implements OnInit,OnDestroy  {
  public activeTab: number = 0;
  public chatData: number;
  public open: boolean = false;
  private subscription: Subscription;
  public activeChat: { profileStatus: string; profileImage: string; name: string; condition: string; badge: string; };

  constructor(
    private tabService: TabService,
    private chatBoardService: ChatBoardService,
    private chatMessageService: ChatMessageService,
    public layoutService: LayoutService
  ) {
    this.tabService.activeTab$.subscribe(tabIndex => {
      this.activeTab = tabIndex;
    });   
    this.subscription = this.chatBoardService.openSearch$.subscribe((open: boolean) => {
      this.open = open;
    });
  }

  closeSearch() {
    this.open = false;
  }

  setDefaultActiveTabData(): void {
    this.activeChat = {
      profileStatus: "online",
      profileImage: "assets/images/contact/1.jpg",
      name: "Mirian Alas",
      condition:"Active",
      badge : "success"
    };
  }

  ngOnInit(): void {
    this.tabService.activeTab$.subscribe((tab) => {
       this.activeTab = tab;
     });
     this.tabService.activeChat$.subscribe((chat) => {
      this.chatData = chat;
    });
    this.setDefaultActiveTabData();
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getImage(wallpaper: string){
    if(wallpaper == 'grediant-1'){
      return 'linear-gradient(359.3deg, rgba(28, 157, 234, 0.1) 1%, rgba(187, 187, 187, 0) 70.9%)'
    } else if (wallpaper == 'grediant-2') {
      return 'radial-gradient(328px at 2.9% 15%, rgb(191, 224, 251) 0%, rgb(232, 233, 251) 25.8%, rgb(252, 239, 250) 50.8%, rgb(234, 251, 251) 77.6%, rgb(240, 251, 244) 100.7%)'
    } else if (wallpaper == 'grediant-3') {
      return 'linear-gradient(109.6deg, rgb(223, 234, 247) 11.2%, rgb(244, 248, 252) 91.1%)'
    } else if (wallpaper == 'grediant-4') {
      return 'linear-gradient(-109.6deg, rgb(204, 228, 247) 11.2%, rgb(237, 246, 250) 100.2%)'
    } else if (wallpaper == 'grediant-5') {
      return 'radial-gradient(circle at 10% 20%, rgb(239, 246, 249) 0%, rgb(206, 239, 253) 90%)'
    } else if (wallpaper == 'grediant-6') {
      return 'radial-gradient(circle at 10% 20%, rgb(226, 240, 254) 0%, rgb(255, 247, 228) 90%)'
    } return `url('assets/images/Fondo_WEB_3.svg')`
  }

  sendMessage(message: string){
    if (this.activeTab === 0) {
      const newMessage: ChatMessage = {
        type: 'send',
        name: this.activeChat.name,
        time: new Date().toLocaleTimeString(),
        messages: [{
          message_type: 'massage',
          message: message,
          tag: 'R'
        }]
      };
      
      // Enviar mensaje al servicio
      this.chatMessageService.addMessage(newMessage);
      
      // Actualizar el chat actual
      this.tabService.updateChat(newMessage);
    } else {
      // Lógica para chat grupal
      // Implementar según sea necesario
    }
  }
}
