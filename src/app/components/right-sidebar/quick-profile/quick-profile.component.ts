import { Component, ElementRef, Renderer2 } from '@angular/core';
import { OthersComponent } from './others/others.component';
import { StatusComponent } from './status/status.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { CommonGroupComponent } from './common-group/common-group.component';
import { StarredMassagesComponent } from './starred-massages/starred-massages.component';
import { SharedMediaComponent } from './shared-media/shared-media.component';
import { SharedDocumentComponent } from './shared-document/shared-document.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
    selector: 'app-quick-profile',
    templateUrl: './quick-profile.component.html',
    styleUrls: ['./quick-profile.component.scss'],
    imports: [ProfileComponent, SharedDocumentComponent, SharedMediaComponent, StarredMassagesComponent, CommonGroupComponent, ContactInfoComponent, StatusComponent, OthersComponent]
})
export class QuickProfileComponent {

  constructor(private renderer: Renderer2,private elementRef: ElementRef) { }

  handleClick() {
    const sidebarElement = document.querySelector('.app-sidebar');
    this.renderer.addClass(sidebarElement, 'active');
  const bodyElement = this.elementRef.nativeElement.ownerDocument.body;
    this.renderer.removeClass(bodyElement, 'sidebar-active');
    this.renderer.removeClass(bodyElement, 'main-page');
    this.renderer.removeClass(bodyElement, 'menu-active');
  }
}
