import { Component } from '@angular/core';
import * as chatboarddata from '../../../../shared/data/component/chat-board/chat-board';

@Component({
    selector: 'app-social-media',
    templateUrl: './social-media.component.html',
    styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent {
  public socialMedia = chatboarddata.socialMedia;

}
