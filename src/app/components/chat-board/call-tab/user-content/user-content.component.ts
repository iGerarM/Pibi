import { Component, ViewChild } from '@angular/core';
import { AudioModalComponent } from '../../chat-tab/right-header/audio-modal/audio-modal.component';
import { VideoModalComponent } from '../../chat-tab/right-header/video-modal/video-modal.component';

@Component({
    selector: 'app-user-content',
    templateUrl: './user-content.component.html',
    styleUrls: ['./user-content.component.scss'],
    imports: [AudioModalComponent, VideoModalComponent]
})
export class UserContentComponent {
  @ViewChild("audio")audio!: AudioModalComponent;
  @ViewChild("video")video!: VideoModalComponent;
 
  openModal(){
    this.audio?.openModal()
  }
  
  videoModal(){
    this.video?.openModal()
  }
}
