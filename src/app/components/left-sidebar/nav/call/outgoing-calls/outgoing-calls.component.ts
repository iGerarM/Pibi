import { Component } from '@angular/core';
import * as statusData from '../../../../../shared/data/component/leftsidebar/leftsidebar';
import {  NgClass, NgStyle } from '@angular/common';

@Component({
    selector: 'app-outgoing-calls',
    templateUrl: './outgoing-calls.component.html',
    styleUrls: ['./outgoing-calls.component.scss'],
    imports: [ NgClass, NgStyle]
})
export class OutgoingCallsComponent {
  public outgoingCalls = statusData.outgoingCalls;

  activeIndex: number = 0; // Initially set the first call log as active

  toggleActive(index: number): void {
    this.activeIndex = index;
  }
}
