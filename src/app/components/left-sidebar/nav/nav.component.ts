import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import * as statusData from '../../../shared/data/component/leftsidebar/leftsidebar';
import { TabService } from '../../../shared/service/left-sidebar/left-sidebar.service';
import { CallComponent } from './call/call.component';
import { ContactComponent } from './contact/contact.component';
import { RecentChatComponent } from './recent-chat/recent-chat.component';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    imports: [CommonModule, RecentChatComponent, CallComponent, ContactComponent]
})
export class NavComponent {
  public tab = statusData.tabs;

  @Input() active: any; number = 0;

  constructor(private tabService: TabService) {}

  toggleActive(tab: any) {
    for (const t of this.tab) {
      t.active = false;
    }
    tab.active = true;
  }

  setActiveTab(tabIndex: number) {
    this.tabService.setActiveTab(tabIndex);
  }

  setActiveItem(index: number) {
    this.tab.forEach((item, i) => {
      item.active = i === index;
      this.tabService.setActiveItem(this.tab[index].id);
    });
  }
}
