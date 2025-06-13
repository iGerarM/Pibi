import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-poll-modal',
    templateUrl: './poll-modal.component.html',
    styleUrls: ['./poll-modal.component.scss'],
    imports: [FormsModule]
})
export class PollModalComponent {
  public modalOpen: boolean = false;
  public closeResult: string = '';
  public active = 'upload';

  @ViewChild("pollModal", { static: false })pollModal!: TemplateRef<any>;
  constructor(private modalService: NgbModal) {}

  async openModal() {
    this.modalOpen = true;
    this.modalService.open(this.pollModal, {
      ariaLabelledBy: 'Payout-Modal',
      centered: true,
      windowClass: 'add-popup pol-modal-main'
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
