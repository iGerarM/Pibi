import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as statusData from '../../../../shared/data/component/leftsidebar/leftsidebar';
import { AllCallsComponent } from './all-calls/all-calls.component';
import { IncomingCallsComponent } from './incoming-calls/incoming-calls.component';
import { MissedCallsComponent } from './missed-calls/missed-calls.component';
import { OutgoingCallsComponent } from './outgoing-calls/outgoing-calls.component';

@Component({
    selector: 'app-call',
    templateUrl: './call.component.html',
    styleUrls: ['./call.component.scss'],
    imports: [CommonModule, AllCallsComponent, IncomingCallsComponent, OutgoingCallsComponent, MissedCallsComponent]
})
export class CallComponent {
  public callTabs = statusData.callTabs;

  toggleActiveTab(selectedTab: any) {
    this.callTabs.forEach(tab => {
      tab.active = tab.id === selectedTab.id;
    });;
  }
}
