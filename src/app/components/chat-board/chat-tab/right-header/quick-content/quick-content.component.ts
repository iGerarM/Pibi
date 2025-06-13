import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { BlockModalComponent } from './block-modal/block-modal.component';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-quick-content',
    templateUrl: './quick-content.component.html',
    styleUrls: ['./quick-content.component.scss'],
    imports: [NgbTooltip, DeleteModalComponent, BlockModalComponent]
})
export class QuickContentComponent {
  public isContentVisible = false;

  @ViewChild("deletekModal")deletekModal!: DeleteModalComponent;
  @ViewChild("blockModal")blockModal!: BlockModalComponent;
  
  constructor(private renderer: Renderer2,private elementRef: ElementRef) { }

  toggleContent(): void {
    this.isContentVisible = !this.isContentVisible;
  }
  handleClick() {
    const sidebarElement = document.querySelector('.app-sidebar');
    this.renderer.removeClass(sidebarElement, 'active');
  const bodyElement = this.elementRef.nativeElement.ownerDocument.body;
    this.renderer.addClass(bodyElement, 'sidebar-active');
    this.renderer.addClass(bodyElement, 'main-page');
    this.renderer.addClass(bodyElement, 'menu-active');
    this.isContentVisible =false;
  }
}
