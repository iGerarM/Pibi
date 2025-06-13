import { Component, Output, EventEmitter } from '@angular/core';
import * as statusData from '../../../shared/data/component/leftsidebar/leftsidebar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgStyle } from '@angular/common';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';

@Component({
    selector: 'app-status-tab',
    templateUrl: './status-tab.component.html',
    styleUrls: ['./status-tab.component.scss'],
    imports: [
        FeatherIconsComponent,
        NgStyle,
    ]
})
export class StatusTabComponent {

  @Output() buttonClicked = new EventEmitter<boolean>(); 

  public status = statusData.status;
  public isActive = false;
  public image_status: string;
	constructor(private modalService: NgbModal) {}
  
  handleClick() {
    this.isActive = true;
    this.buttonClicked.emit(true);
  }

	openVerticallyCentered(content: any, image: string) {
    this.image_status = image
		this.modalService.open(content, { centered: true, windowClass: 'status-modal' });
	}
}
