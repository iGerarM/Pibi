import { Component } from '@angular/core';
import { LayoutService } from '../../../../shared/service/layout.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  public isBlockOpen: boolean = false;

  constructor(public layoutService: LayoutService){}

  toggleBlock() {
    this.isBlockOpen = !this.isBlockOpen;
  }

  selectWallpaper(wallpaper?: string){
    this.layoutService.config.wallpaper = wallpaper!
  }
}
