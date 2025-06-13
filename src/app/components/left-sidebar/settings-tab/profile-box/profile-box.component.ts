import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-profile-box',
    templateUrl: './profile-box.component.html',
    styleUrls: ['./profile-box.component.scss'],
    imports: [NgStyle, FormsModule]
})
export class ProfileBoxComponent {
  public open: boolean = false;
  public isEditMode: boolean = false;

  username: string = 'Josephin water';
  address: string = 'Alabma, USA';
  editedUsername: string = '';
  editedAddress: string = '';

  toggleEditMode() {
    if (this.open) {
      // Save the changes
      this.username = this.editedUsername;
      this.address = this.editedAddress;
    } else {
      // Enter edit mode
      this.editedUsername = this.username;
      this.editedAddress = this.address;
    }
      this.open = !this.open;
  }
}
