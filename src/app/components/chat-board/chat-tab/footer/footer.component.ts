import { Component, EventEmitter, Output } from '@angular/core';
import { QuickPollComponent } from './quick-poll/quick-poll.component';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';
import { EmojiComponent } from './emoji/emoji.component';
import { StickerComponent } from './sticker/sticker.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [AngularSvgIconModule, StickerComponent, EmojiComponent, FeatherIconsComponent, QuickPollComponent, FormsModule],

})
export class FooterComponent {
  public open: boolean = false;
  public active: boolean = false;
  public isActive: boolean = false;
  public isOpen:boolean = false;

  @Output() outputMessage = new EventEmitter<string>();

  message: string = '';
  toggleSticker(){
    this.open = !this.open
    this.active=!this.active
    this.isOpen = false
  }

  toggleEmoji(){
    this.isOpen = ! this.isOpen
    this.isActive = !this.isActive
    this.open = false
  }

  close(): void{
    this.open = false;
    this.isOpen = false
    this.isActive = false
    this.isOpen = false
  }

  sendMessage(){
    if (this.message.trim()) {
      this.outputMessage.emit(this.message);
      this.message = ''; // Limpiar el input después de enviar
    }
  }
}
