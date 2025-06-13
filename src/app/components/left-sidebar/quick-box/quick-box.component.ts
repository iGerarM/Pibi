import { Component, ViewChild } from '@angular/core';
import { AddFavoriteComponent } from '../favorite-tab/add-favorite/add-favorite.component';
import { ChatModalComponent } from './chat-modal/chat-modal.component';
import { CallModalComponent } from './call-modal/call-modal.component';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';

@Component({
    selector: 'app-quick-box',
    templateUrl: './quick-box.component.html',
    styleUrls: ['./quick-box.component.scss'],
    imports: [FeatherIconsComponent, ChatModalComponent, CallModalComponent, AddFavoriteComponent]
})
export class QuickBoxComponent {
  public isFavorite: boolean = false;
  public isActive: boolean = false;
  @ViewChild("addFavorite")addFavorite!: AddFavoriteComponent;

  @ViewChild("msgChatModal")msgChatModal!: ChatModalComponent;

  @ViewChild("callModal")callModal!: CallModalComponent;


  openModal(){
    this.addFavorite?.openModal()

  }
  modal(){
    this.callModal?.openModal()

  }
  msgModal(){
    this.msgChatModal?.openModal()

  }
}
