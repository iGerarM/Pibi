import { Component } from '@angular/core';
import * as statusData from '../../../../../shared/data/component/leftsidebar/leftsidebar';
import { FeatherIconsComponent } from '../../../../../shared/components/feather-icons/feather-icons.component';
import {  NgStyle } from '@angular/common';

@Component({
    selector: 'app-all-calls',
    templateUrl: './all-calls.component.html',
    styleUrls: ['./all-calls.component.scss'],
    imports: [ NgStyle, FeatherIconsComponent]
})
export class AllCallsComponent {
  public callLogs = statusData.callLogs;
  
  
  
  activeIndex: number = 0; // Initially set the first call log as active

  toggleActive(index: number): void {
    this.activeIndex = index;
  }
}
