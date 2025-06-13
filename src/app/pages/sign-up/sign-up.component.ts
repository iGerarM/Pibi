import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeatherIconsComponent } from '../../shared/components/feather-icons/feather-icons.component';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
    imports: [FormsModule, FeatherIconsComponent]
})
export class SignUpComponent {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
