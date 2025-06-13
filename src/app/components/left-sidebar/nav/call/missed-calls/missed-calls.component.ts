import { Component } from '@angular/core';
import * as statusData from '../../../../../shared/data/component/leftsidebar/leftsidebar';
import { FeatherIconsComponent } from '../../../../../shared/components/feather-icons/feather-icons.component';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-missed-calls',
    templateUrl: './missed-calls.component.html',
    styleUrls: ['./missed-calls.component.scss'],
    imports: [ NgStyle, FeatherIconsComponent]
})
export class MissedCallsComponent {
  public missedCalls = statusData.missedCalls;

  activeIndex: number = 0; // Initially set the first call log as active

  toggleActive(index: number): void {
    this.activeIndex = index;
  }
}
