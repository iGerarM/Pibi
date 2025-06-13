import { Component } from '@angular/core';
import * as chatboarddata from '../../../shared/data/component/chat-board/chat-board';
import { SocialMediaComponent } from './social-media/social-media.component';
import { UserContentComponent } from '../call-tab/user-content/user-content.component';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    imports: [UserContentComponent, SocialMediaComponent]
})
export class ContactComponent {
  public contactInfo = chatboarddata.contactInfo;

}
