import { Component } from '@angular/core';

@Component({
    selector: 'app-account-info',
    templateUrl: './account-info.component.html',
    styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent {
  public show: boolean = false;

  toggle() {
    this.show = !this.show;
  }
}
