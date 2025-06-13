import { Component } from '@angular/core';
import * as rightsidebarData from '../../../../shared/data/component/rightsidebar/rightsidebar';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
  public linkGroups  = rightsidebarData.linkGroups ;

}
