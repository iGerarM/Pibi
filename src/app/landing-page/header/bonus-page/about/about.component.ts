import { Component } from '@angular/core';
import * as landingData from '../../../../shared/data/component/landing/landing';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    imports: [CarouselModule, RouterLink]
})
export class AboutComponent {
  public testimonialItems = landingData.testimonialItems;
  public counters = landingData.counters;

  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,
    margin: 25,
    navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      1200: {
        items: 4
      }
    },
    nav: true
  }
}
