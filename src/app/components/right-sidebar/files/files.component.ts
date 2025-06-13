import { Component } from '@angular/core';
import * as rightsidebarData from '../../../shared/data/component/rightsidebar/rightsidebar';
import { DocComponent } from './doc/doc.component';
import { LinkComponent } from './link/link.component';
import { MediaComponent } from './media/media.component';
import { CloseAppsComponent } from '../close-apps/close-apps.component';

@Component({
    selector: 'app-files',
    templateUrl: './files.component.html',
    styleUrls: ['./files.component.scss'],
    imports: [CloseAppsComponent, MediaComponent, LinkComponent, DocComponent]
})
export class FilesComponent {
  public navItems = rightsidebarData.navItems;
  public active = 1;

  toggleActive(index: number): void {
    this.navItems.forEach((item, i) => {
      item.active = i === index;
    });
  }
  
  tabActive(type: string) {
    return this.navItems.some(item => item.type === type && item.active);
  }
}
