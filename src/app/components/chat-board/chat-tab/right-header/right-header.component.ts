import { Component, EventEmitter, ViewChild } from '@angular/core';
import { AudioModalComponent } from './audio-modal/audio-modal.component';
import { VideoModalComponent } from './video-modal/video-modal.component';

import { QuickContentComponent } from './quick-content/quick-content.component';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { ChatBoardService } from '../../../../shared/service/chat-board/chat-board.service';
import { MainNavService } from '../../../../shared/service/main-nav/main-nav.service';

@Component({
    selector: 'app-right-header',
    templateUrl: './right-header.component.html',
    styleUrls: ['./right-header.component.scss'],
    imports: [NgbTooltip, FeatherIconsComponent, AudioModalComponent, VideoModalComponent, QuickContentComponent]
})
export class RightHeaderComponent {

  @ViewChild("audio")audioModal!: AudioModalComponent;
  @ViewChild("video")videoModal!: VideoModalComponent;

  constructor(public chatBoardService: ChatBoardService,
    public mainNavService: MainNavService) {}

  toggleActive() {
    this.chatBoardService.toggleActiveState();
  }
}
