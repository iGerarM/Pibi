import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import * as statusData from '../../../shared/data/component/leftsidebar/leftsidebar';
import { SearchComponent } from '../search/search.component';

@Component({
    selector: 'app-contact-tab',
    templateUrl: './contact-tab.component.html',
    styleUrls: ['./contact-tab.component.scss'],
    imports: [
        SearchComponent,
        CommonModule
    ]
})
export class ContactTabComponent {
  public chatList = statusData.chatList;
  public isActive: boolean = false;
  public open: boolean = false;

  activeIndex: number = 0; // Initially set the first call log as active

  @Output() buttonClicked = new EventEmitter<boolean>();

  constructor() {}
  
  handleClick() {
    this.isActive = true;
    this.buttonClicked.emit(true);
  }

  openSearch() {
    this.open = true;
  }

  closeSearch() {
    this.open = false;
  }

  toggleActive(index: number): void {
    this.activeIndex = index;
  }
}
