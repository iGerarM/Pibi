import { Component } from '@angular/core';

@Component({
    selector: 'app-security',
    templateUrl: './security.component.html',
    styleUrls: ['./security.component.scss'],
})
export class SecurityComponent {
  public show: boolean = false;

  toggle() {
    this.show = !this.show;
  }
}
