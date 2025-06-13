import { Component } from '@angular/core';
import * as statusData from '../../../../shared/data/component/leftsidebar/leftsidebar';
import { NgClass, NgStyle } from '@angular/common';

@Component({
    selector: 'app-chat-main',
    templateUrl: './chat-main.component.html',
    styleUrls: ['./chat-main.component.scss'],
    imports: [
        NgClass,
        NgStyle,
    ]
})
export class ChatMainComponent {
  public contacts = statusData.contacts;

  toggleFavourite(contact: any) {
    contact.isFavourite = !contact.isFavourite;
  }
}
