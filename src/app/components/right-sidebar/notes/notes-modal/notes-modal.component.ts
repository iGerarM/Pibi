import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-notes-modal',
    templateUrl: './notes-modal.component.html',
    styleUrls: ['./notes-modal.component.scss'],
})
export class NotesModalComponent {
  public modalOpen: boolean = false;
  public closeResult: string = '';
  public active = 'upload';

  @ViewChild("notesModal", { static: false })notesModal!: TemplateRef<any>;
  constructor(private modalService: NgbModal) {}

  async openModal() {
    this.modalOpen = true;
    this.modalService.open(this.notesModal, {
      ariaLabelledBy: 'Payout-Modal',
      centered: true,
      windowClass: 'notes-modal-main add-popup'
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
