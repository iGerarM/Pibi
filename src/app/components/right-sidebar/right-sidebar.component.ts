import { Component, ViewChild } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { ConfigurationModalComponent, ConfigurationModalComponent as ConfigurationModalComponent_1 } from '../../shared/components/customizer/configuration-modal/configuration-modal.component';
import { CustomizerComponent } from '../../shared/components/customizer/customizer.component';
import * as rightsidebarData from '../../shared/data/component/rightsidebar/rightsidebar';
import { FilesComponent } from './files/files.component';
import { NotesComponent } from './notes/notes.component';
import { QuickProfileComponent } from './quick-profile/quick-profile.component';
import { ReminderComponent } from './reminder/reminder.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ChatBoardService } from '../../shared/service/chat-board/chat-board.service';
import { LayoutService } from '../../shared/service/layout.service';
import { MainNavService } from '../../shared/service/main-nav/main-nav.service';
import { RightSidebarService } from '../../shared/service/right-sidebar/right-sidebar.service';

@Component({
    selector: 'app-right-sidebar',
    templateUrl: './right-sidebar.component.html',
    styleUrls: ['./right-sidebar.component.scss'],
    imports: [QuickProfileComponent, ToDoComponent, FilesComponent, NotesComponent, ReminderComponent,
         AngularSvgIconModule, CustomizerComponent, ConfigurationModalComponent_1]
})
export class RightSidebarComponent {
  public isActive: boolean = true;
  public appItems = rightsidebarData.appItems;
  public rtl: boolean = false;
  public active: boolean = true;
  public Visible: boolean = true;

  @ViewChild("ConfigurationModal") ConfigurationModal: ConfigurationModalComponent;

  constructor(public chatBoardService: ChatBoardService,
    private sharedService: RightSidebarService,
    public maniNavService: MainNavService,
    public layoutService: LayoutService
  ) {
    this.sharedService.closeClick$.subscribe(() => {
      // Update the state to remove the active class
      this.setTabsInactive();
    });

    if (this.layoutService.config.rtl) {
      document.body.classList.add('rtl')
    } else {
      document.body.classList.remove('rtl')
    }
  }

  applyRTL() {
    this.layoutService.config.rtl = !this.layoutService.config.rtl
    if (this.layoutService.config.rtl) {
      document.body.classList.add('rtl')
    } else {
      document.body.classList.remove('rtl')
    }
  }

  toggleActive(index: number): void {
    this.layoutService.sidebarClass = false;
    for (let i = 0; i < this.appItems.length; i++) {
      if (i === index) {
        this.appItems[i].active = true;
      } else {
        this.appItems[i].active = false;
      }
    }
  }

  removeActiveClass() {
    this.isActive = false; // Set isActive to false to remove the active class
  }


  tabActive(type: string) {
    return this.appItems.some(item => item.type === type && item.active);
  }
  setTabsInactive(): void {
    this.appItems.forEach(item => {
      item.active = false;
    });
  }


  toggleCustomizer() {
    this.Visible = !this.Visible;
  }

  ngOnInit() {
    this.chatBoardService.isActive$.subscribe(isActive => {
      this.isActive = isActive;
    });
  }
}
