import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LayoutService } from '../../../service/layout.service';

@Component({
    selector: 'app-configuration-modal',
    templateUrl: './configuration-modal.component.html',
    styleUrls: ['./configuration-modal.component.scss'],
})
export class ConfigurationModalComponent {
  
  public modalOpen: boolean = false;
  public closeResult: string;
  public active = 'upload';

  constructor( private modalService: NgbModal, public layoutService: LayoutService) { }
  @ViewChild("ConfigurationModal", { static: false }) ConfigurationModal: TemplateRef<any>;

  async openModal() {
    this.modalOpen = true;
    this.modalService.open(this.ConfigurationModal, {
      ariaLabelledBy: 'Payout-Modal',
      centered: true,
      windowClass: 'configuration-modal add-popup'
    }).result.then((result) => {
      `Result ${result}`
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this.active = 'upload';
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  copyText(data: any){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = JSON.stringify(data);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
      
}
