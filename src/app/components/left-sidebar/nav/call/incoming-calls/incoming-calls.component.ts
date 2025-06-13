import { Component } from '@angular/core';
import * as statusData from '../../../../../shared/data/component/leftsidebar/leftsidebar';
import {  NgClass, NgStyle } from '@angular/common';

@Component({
    selector: 'app-incoming-calls',
    templateUrl: './incoming-calls.component.html',
    styleUrls: ['./incoming-calls.component.scss'],
    imports: [ NgClass, NgStyle]
})
export class IncomingCallsComponent {
  public incomingCall = statusData.incomingCall;



  activeIndex: number = 0; // Initially set the first call log as active

  toggleActive(index: number): void {
    this.activeIndex = index;
  }
}
