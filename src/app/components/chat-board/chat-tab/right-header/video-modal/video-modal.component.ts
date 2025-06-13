import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIconsComponent } from '../../../../../shared/components/feather-icons/feather-icons.component';

@Component({
    selector: 'app-video-modal',
    templateUrl: './video-modal.component.html',
    styleUrls: ['./video-modal.component.scss'],
    imports: [FeatherIconsComponent]
})
export class VideoModalComponent {
  public modalOpen: boolean = false;
  public closeResult: string = '';
  public active = 'upload';

  @ViewChild("videoModal", { static: false })videoModal!: TemplateRef<any>;
  constructor(private modalService: NgbModal) {}

  async openModal() {
    this.modalOpen = true;
    this.modalService.open(this.videoModal, {
      ariaLabelledBy: 'Payout-Modal',
      centered: true,
      windowClass: 'viddiolog theme-modal dialog-centered'
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
