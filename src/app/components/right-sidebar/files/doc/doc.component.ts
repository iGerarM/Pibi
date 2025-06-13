import { Component } from '@angular/core';
import * as rightsidebarData from '../../../../shared/data/component/rightsidebar/rightsidebar';

@Component({
    selector: 'app-doc',
    templateUrl: './doc.component.html',
    styleUrls: ['./doc.component.scss'],
})
export class DocComponent {
 
  public docItems  = rightsidebarData.docItems ;

  getIconColor(icon: string): string {
    if (icon === 'file-code-o') {
      return 'danger';
    } else if (icon === 'file-video-o') {
      return 'success';
    } else if (icon === 'file-word-o') {
      return 'primary';
    } else if (icon === 'file-pdf-o') {
      return 'warning';
    } else {
      return 'danger';
    }
  }
  
}
