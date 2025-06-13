import { Component, EventEmitter, Output } from '@angular/core';
import * as statusData from '../../../shared/data/component/leftsidebar/leftsidebar';
import { NgClass } from '@angular/common';
import { SearchComponent } from '../search/search.component';

@Component({
    selector: 'app-document-tab',
    templateUrl: './document-tab.component.html',
    styleUrls: ['./document-tab.component.scss'],
    imports: [
        SearchComponent,
        NgClass,
    ]
})
export class DocumentTabComponent {
  public files = statusData.files;
  public open: boolean = false;
  public isActive: boolean = false;

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

  getFileIconClass(extension: string): string {
    switch (extension) {
      case 'html':
        return 'fa fa-file-code-o';
      case 'mp4':
        return 'fa fa-file-video-o';
      case 'xlsx':
        return 'fa fa-file-word-o';
      case 'pdf':
        return 'fa fa-file-pdf-o';
      case 'txt':
        return 'fa fa-file-text-o';
      default:
        return 'fa fa-file-o';
    }
  }
}
