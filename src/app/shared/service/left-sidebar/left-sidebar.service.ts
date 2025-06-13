import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  activeComponentId: string | any;

  private activeTabSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private activeChatSubject: BehaviorSubject<any> = new BehaviorSubject<any>({ chat: [] });
  private activeGroupubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public tabIdSubject: Subject<number> = new Subject<number>();

  public activeTab$ = this.activeTabSubject.asObservable();
  public activeChat$ = this.activeChatSubject.asObservable();
  public activeGroup$ = this.activeGroupubject.asObservable();
  tab: number | any;

  setActiveTab(tabIndex: number) {
    this.activeTabSubject.next(tabIndex);
  }

  setActiveChat(chat: any) {
    this.activeChatSubject.next(chat);
  }

  setActiveGroup(group: any) {
    this.activeGroupubject.next(group);
  }

  getActiveChat() {
    return this.activeChatSubject.getValue();
  }

  getActiveGroup() {
    return this.activeGroupubject.getValue();
  }

  updateChat(newMessage: any) {
    const currentChat = this.getActiveChat();
    if (currentChat && currentChat.chat) {
      currentChat.chat.push(newMessage);
      this.setActiveChat(currentChat);
    }
  }

  setActiveItem(liId: number) {
    this.tab = liId;
    this.tabIdSubject.next(liId);
  }
}
