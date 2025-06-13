import { Component } from '@angular/core';
import * as statusData from '../../../../shared/data/component/leftsidebar/leftsidebar';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    imports: [ NgStyle, FeatherIconsComponent]
})
export class ContactComponent {
  public contact = statusData.contact;

  activeIndex: number = 0; // Initially set the first call log as active

  toggleActive(index: number): void {
    this.activeIndex = index;
  }
}
