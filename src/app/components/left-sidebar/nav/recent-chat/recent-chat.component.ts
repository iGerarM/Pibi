import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as statusData from '../../../../shared/data/component/leftsidebar/leftsidebar';
import { TabService } from '../../../../shared/service/left-sidebar/left-sidebar.service';

@Component({
    selector: 'app-recent-chat',
    templateUrl: './recent-chat.component.html',
    styleUrls: ['./recent-chat.component.scss'],
    imports: [CommonModule]
})
export class RecentChatComponent {
  public chatTab = statusData.chatTabs;
  public chats = statusData.chats;
  public groups = statusData.groups;

  constructor(private tabService: TabService) {
    this.chats.map(data=> {
      if(data.active){this.tabService.setActiveChat(data)}  
    })
  }

  toggleActiveTab(selectedTab: any) {
    this.chatTab.forEach(tab => {
      tab.active = tab.id === selectedTab.id;
    });;
  }

  toggleChat(chat: any) {
  this.chats.forEach((c) => (c.active = c === chat));
  this.tabService.setActiveChat(chat);
  }

  toggle(group:any){
    this.groups.forEach((c) => (c.active = c === group));
    this.tabService.setActiveGroup(group);
  }

  setActiveTab(tabIndex: number) {
    this.tabService.setActiveTab(tabIndex);
  }

  toggleActive(clickedChat: any) {
    for (let chat of this.chats) {
    chat.active = (chat === clickedChat);
    }
  }

  toggleGroup(clickedGroup: any) {
   for (let group of this.groups) {
     group.active = (group === clickedGroup);
    }
  }
}
