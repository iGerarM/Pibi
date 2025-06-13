import { Component } from '@angular/core';

@Component({
    selector: 'app-change-number',
    templateUrl: './change-number.component.html',
    styleUrls: ['./change-number.component.scss'],
})
export class ChangeNumberComponent {
  public  show: boolean = false;

  toggle() {
    this.show = !this.show;
  }
}
