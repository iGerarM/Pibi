import { Component, ElementRef, Renderer2 } from '@angular/core';
import { LayoutService } from '../../../service/layout.service';

@Component({
    selector: 'app-sidebar-type',
    templateUrl: './sidebar-type.component.html',
    styleUrls: ['./sidebar-type.component.scss'],
})
export class SidebarTypeComponent {
  activeColumn: string = 'three-column';
  
  constructor(private renderer: Renderer2, private elementRef: ElementRef, public layoutService: LayoutService) {}

  toggleActive(column: string) {
    this.layoutService.config.sidebar_type = column;
    if (this.layoutService.config.sidebar_type === 'two-column') {
      const navElement = this.elementRef.nativeElement.ownerDocument.querySelector('#mainNav');
      navElement.classList.remove('on');
    }
    if (this.layoutService.config.sidebar_type === 'three-column') {
      const navElement = this.elementRef.nativeElement.ownerDocument.querySelector('#mainNav');
      navElement.classList.add('on');
    }
  }
}
