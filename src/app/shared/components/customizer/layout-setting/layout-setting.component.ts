import { Component, ElementRef, Renderer2 } from '@angular/core';
import { LayoutService } from '../../../service/layout.service';

@Component({
    selector: 'app-layout-setting',
    templateUrl: './layout-setting.component.html',
    styleUrls: ['./layout-setting.component.scss'],
})
export class LayoutSettingComponent {

  activeClass: string = this.layoutService.config.layout;

  constructor(private renderer: Renderer2, private elementRef: ElementRef, public layoutService: LayoutService) {}

  toggleActive(className: string) {
  this.layoutService.config.layout = className;
  const bodyElement = this.elementRef.nativeElement.ownerDocument.body;
  this.renderer.removeClass(bodyElement, 'dark');
  this.renderer.removeClass(bodyElement, 'dark-sidebar');
  this.renderer.removeClass(bodyElement, 'colorfull');
  
  if (this.activeClass === className) {
    this.activeClass = '';
  } else {
    this.activeClass = className;
    if (this.activeClass === 'dark-sidebar') {
      this.renderer.addClass(bodyElement, 'dark-sidebar');
    } 
    if (this.activeClass === 'dark') {
      this.renderer.addClass(bodyElement, 'dark');
    } 
    if (this.activeClass === 'colorfull') {
      this.renderer.addClass(bodyElement, 'colorfull');
    } 
  }
}

}
