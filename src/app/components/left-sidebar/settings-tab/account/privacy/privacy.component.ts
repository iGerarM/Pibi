import { Component } from '@angular/core';
import * as statusData from '../../../../../shared/data/component/leftsidebar/leftsidebar';

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent {
  public privacy = statusData.privacy;
  public show: boolean = false;
  
  toggle() {
    this.show = !this.show;
  }
}
