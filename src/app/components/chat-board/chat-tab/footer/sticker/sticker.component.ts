import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/component/chat-board/chat-board';

@Component({
    selector: 'app-sticker',
    templateUrl: './sticker.component.html',
    styleUrls: ['./sticker.component.scss'],

})
export class StickerComponent {

  public sticker = data.stickers;

}
