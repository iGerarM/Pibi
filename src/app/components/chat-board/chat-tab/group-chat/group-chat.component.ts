import { NgStyle } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';
import { TabService } from '../../../../shared/service/left-sidebar/left-sidebar.service';
import { LeftHeaderComponent } from '../left-header/left-header.component';
import { AudioModalComponent } from '../right-header/audio-modal/audio-modal.component';
import { VideoModalComponent } from '../right-header/video-modal/video-modal.component';
import { ChatBoardService } from '../../../../shared/service/chat-board/chat-board.service';
import { LayoutService } from '../../../../shared/service/layout.service';
import { MainNavService } from '../../../../shared/service/main-nav/main-nav.service';

@Component({
    selector: 'app-group-chat',
    templateUrl: './group-chat.component.html',
    styleUrls: ['./group-chat.component.scss'],
    imports: [NgStyle, LeftHeaderComponent, NgbTooltip, FeatherIconsComponent, AudioModalComponent, VideoModalComponent]
})
export class GroupChatComponent implements OnInit {

  public activeGroup  : any

  @ViewChild("audio") audioModal!: AudioModalComponent;
  @ViewChild("video") videoModal!: VideoModalComponent;


  constructor(private tabService: TabService, public chatBoardService: ChatBoardService, public layoutService: LayoutService, public mainNavService: MainNavService) { }

  setDefaultActiveTabData(): void {
    this.activeGroup = {
      profileImage: "assets/images/avtar/teq.jpg",
      name: "Tech Ninjas",
    };
  }

  toggleActive() {
    this.chatBoardService.toggleActiveState();
  }

  ngOnInit(): void {
    this.tabService.activeGroup$.subscribe((group) => {
      this.activeGroup = group;
    });
    this.setDefaultActiveTabData();
  }
}