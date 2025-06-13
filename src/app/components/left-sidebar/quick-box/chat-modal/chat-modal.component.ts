import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as statusData from '../../../../shared/data/component/leftsidebar/leftsidebar';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-chat-modal',
    templateUrl: './chat-modal.component.html',
    styleUrls: ['./chat-modal.component.scss'],
    imports: [NgStyle]
})
export class ChatModalComponent {

  public chats = statusData.chats;
  public modalOpen: boolean = false;
  public closeResult: string = '';
  public active = 'upload';

  @ViewChild("msgChatModal", { static: false })msgChatModal!: TemplateRef<any>;
  constructor(private modalService: NgbModal) {}

  async openModal() {
    this.modalOpen = true;
    this.modalService.open(this.msgChatModal, {
      ariaLabelledBy: 'Payout-Modal',
      centered: true,
      windowClass: 'theme-modal msg-chat-modal add-popup'
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
