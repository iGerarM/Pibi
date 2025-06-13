import { Component } from '@angular/core';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { ChangeNumberComponent } from './change-number/change-number.component';
import { VerificationComponent } from './verification/verification.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SecurityComponent } from './security/security.component';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
    imports: [
        SecurityComponent,
        PrivacyComponent,
        VerificationComponent,
        ChangeNumberComponent,
        AccountInfoComponent,
        DeleteAccountComponent,
    ]
})
export class AccountComponent {
  public isBlockOpen: boolean = false;

  toggleBlock() {
    this.isBlockOpen = !this.isBlockOpen;
  }
}
