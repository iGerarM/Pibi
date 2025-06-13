import { Component, OnInit } from '@angular/core';
import { MainNavService } from '../../shared/service/main-nav/main-nav.service';
import { StatusTabComponent } from './status-tab/status-tab.component';
import { SettingsTabComponent } from './settings-tab/settings-tab.component';
import { NotificationTabComponent } from './notification-tab/notification-tab.component';
import { ContactTabComponent } from './contact-tab/contact-tab.component';
import { DocumentTabComponent } from './document-tab/document-tab.component';
import { FavoriteTabComponent } from './favorite-tab/favorite-tab.component';
import { NavComponent } from './nav/nav.component';
import { FeatherIconsComponent } from '../../shared/components/feather-icons/feather-icons.component';
import { SearchComponent } from './search/search.component';
import { QuickBoxComponent } from './quick-box/quick-box.component';
import { RecentSliderComponent } from './recent-slider/recent-slider.component';
import { LayoutService } from '../../shared/service/layout.service';

@Component({
    selector: 'app-left-sidebar',
    templateUrl: './left-sidebar.component.html',
    styleUrls: ['./left-sidebar.component.scss'],
    imports: [
        RecentSliderComponent,
        QuickBoxComponent,
        SearchComponent,
        FeatherIconsComponent,
        NavComponent,
        FavoriteTabComponent,
        DocumentTabComponent,
        ContactTabComponent,
        NotificationTabComponent,
        SettingsTabComponent,
        StatusTabComponent,
    ]
})
export class LeftSidebarComponent implements OnInit {
  public sidebarId!: number | string;
  public isActive: boolean = true;
  public isPrimary: boolean = false;
  public isOpen: boolean = false;

  constructor(public mainNavService: MainNavService, public layoutService: LayoutService) {}
 
  toggleActiveClass() {
    const divElement = document.getElementById(
      `.recent-default dynemic-sidebar`
  );
  if (divElement) {
    divElement.classList.toggle('active');
    }
  }

  updateIsActive() {
    this.isActive = this.sidebarId == 'active';
  }

  handleButtonClicked() {
    this.isActive = true;
  }

  toggleClass() {
    this.layoutService.togglePrimaryClass();
  }

  mobileBack(){
    this.layoutService.mobileBack = true;
    this.layoutService.config.sidebar_setting = false;
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
    this.mainNavService.sidebarIdSubject.subscribe((divId: number) => {
      this.sidebarId = divId;
      this.toggleActiveClass();
      this.updateIsActive();
    });
  }
}
