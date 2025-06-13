import { Component, ElementRef, Renderer2 } from '@angular/core';
import { LayoutService } from '../../../service/layout.service';

@Component({
    selector: 'app-color',
    templateUrl: './color.component.html',
    styleUrls: ['./color.component.scss'],
})
export class ColorComponent {


  constructor(private renderer: Renderer2, private elementRef: ElementRef, public layoutService: LayoutService) { }

  toggleActive(color: string) {
    // Remove active class from all color elements
    this.layoutService.config.color = color;
    const colorElements = this.elementRef.nativeElement.querySelectorAll('.colors li');
    colorElements.forEach((element: any) => {
      this.renderer.removeClass(element, 'active');
    });
  
    // Add active class to the clicked color element
    const clickedElement = this.elementRef.nativeElement.querySelector(`.${color}`);
    this.renderer.addClass(clickedElement, 'active');
  
    // Remove any previously added style sheets
    const head = this.elementRef.nativeElement.ownerDocument.head;
    const existingStyleSheets = head.querySelectorAll('[id^="dynamic-style"]');
    existingStyleSheets.forEach((styleSheet: any) => {
      head.removeChild(styleSheet);
    });
  
    // Add the new style sheet
    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'type', 'text/css');
    this.renderer.setAttribute(link, 'href', `assets/css/style${color.slice(5)}.css`);
    this.renderer.setAttribute(link, 'media', 'screen');
    this.renderer.setAttribute(link, 'id', `dynamic-style-${color}`);
    this.renderer.appendChild(head, link);
  }
}
