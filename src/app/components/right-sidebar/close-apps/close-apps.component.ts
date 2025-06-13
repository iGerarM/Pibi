import { Component } from '@angular/core';
import { RightSidebarService } from '../../../shared/service/right-sidebar/right-sidebar.service';
import { LayoutService } from '../../../shared/service/layout.service';


@Component({
    selector: 'app-close-apps',
    templateUrl: './close-apps.component.html',
    styleUrls: ['./close-apps.component.scss'],
})
export class CloseAppsComponent {
  constructor(private sharedService: RightSidebarService, private layoutService: LayoutService) { }

  onCloseClick(): void {
    this.layoutService.sidebarClass = true;
    this.sharedService.emitCloseClick();
  }
  
}

