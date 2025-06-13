import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIconsComponent } from '../../../../../shared/components/feather-icons/feather-icons.component';

@Component({
    selector: 'app-audio-modal',
    templateUrl: './audio-modal.component.html',
    styleUrls: ['./audio-modal.component.scss'],
    imports: [FeatherIconsComponent]
})
export class AudioModalComponent {
  public modalOpen: boolean = false;
  public closeResult: string = '';
  public active = 'upload';

  @ViewChild("audioModal", { static: false })audioModal!: TemplateRef<any>;
  constructor(private modalService: NgbModal) {}

  async openModal() {
    this.modalOpen = true;
    this.modalService.open(this.audioModal, {
      ariaLabelledBy: 'Payout-Modal',
      centered: true,
      windowClass: '  modal-dialog-centered'
    }).result.then((result) => {
      `Result ${result}`
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: number): string {
    this.active = 'upload';
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
