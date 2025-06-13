import { Component } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
    imports: [CarouselModule]
})
export class TeamComponent {

  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    autoplay:true,
    autoplayHoverPause:true,
    navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
    margin: 25,
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
