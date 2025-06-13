import { Component } from '@angular/core';

@Component({
    selector: 'app-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.scss'],
})
export class HelpComponent {
  public isBlockOpen: boolean = false;

  toggleBlock() {
    this.isBlockOpen = !this.isBlockOpen;
  }
}
