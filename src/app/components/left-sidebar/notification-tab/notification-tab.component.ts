import { Component, EventEmitter, Output } from '@angular/core';
import * as statusData from '../../../shared/data/component/leftsidebar/leftsidebar';
import {  NgClass, NgStyle } from '@angular/common';

@Component({
    selector: 'app-notification-tab',
    templateUrl: './notification-tab.component.html',
    styleUrls: ['./notification-tab.component.scss'],
    imports: [
       
        NgClass,
        NgStyle,
    ]
})
export class NotificationTabComponent {
  public chatItems = statusData.chatItems;
  public isActive: boolean = false;
  
  @Output() buttonClicked = new EventEmitter<boolean>();

  constructor() {}
  
  handleClick() {
    this.isActive = true;
    this.buttonClicked.emit(true);
  }
}
