import { Component, ViewEncapsulation } from '@angular/core';
import * as rightsidebarData from '../../../../shared/data/component/rightsidebar/rightsidebar';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, GallerizeDirective } from 'ng-gallery/lightbox';
import { NgFor, NgClass } from '@angular/common';
import { NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody, GallerizeDirective, NgClass]
})
export class MediaComponent {
  public blocks  = rightsidebarData.blocks ;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {
  }

  ngOnInit() {

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

  }
}
