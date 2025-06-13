import { Component, ElementRef, Renderer2 } from '@angular/core';
import { TabService } from '../../../../shared/service/left-sidebar/left-sidebar.service';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    imports: [NgStyle]
})
export class ProfileComponent {
  
  public activeChat : any;

  constructor(private renderer: Renderer2,private elementRef: ElementRef,private tabService: TabService
  ) { }

  handleClick() {
    const sidebarElement = document.querySelector('.app-sidebar');
    this.renderer.addClass(sidebarElement, 'active');
  const bodyElement = this.elementRef.nativeElement.ownerDocument.body;
    this.renderer.removeClass(bodyElement, 'sidebar-active');
    this.renderer.removeClass(bodyElement, 'main-page');
    this.renderer.removeClass(bodyElement, 'menu-active');
  }
  setDefaultActiveTabData(): void {
    this.activeChat ={
      profileStatus: "online",
      profileImage: "assets/images/contact/1.jpg",
      name: "Josephin water",
      condition:"Active",
      badge : "success"
  };
}
  ngOnInit(): void {
    this.tabService.activeChat$.subscribe((chat) => {
      this.activeChat = chat;
    });
    this.setDefaultActiveTabData();
  }
}
