import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-pricing-plan',
    templateUrl: './pricing-plan.component.html',
    styleUrls: ['./pricing-plan.component.scss'],
    imports: [CarouselModule]
})
export class PricingPlanComponent {
  customOptions = {
    loop: true,
    nav: false,
    dot: false,
    
    autoplay:true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };
  items = [
    {
      icon: 'assets/images/landing/pricing-plan/1.png',
      title: 'Free Plan',
      price: '$0',
      description: 'Totally Free Plane',
      features: [
        'Common Feature is Available',
        'High Definition Full-screen',
        'Try for free, Forever!'
      ]
    },
    {
      icon: 'assets/images/landing/pricing-plan/2.png',
      title: 'Professional',
      price: '$59',
      description: 'Professional Plane',
      features: [
        'All Features is Available',
        'High Definition Full-screen',
        '24/7 phone and email support'
      ]
    },
    {
      icon: 'assets/images/landing/pricing-plan/3.png',
      title: 'Advanced',
      price: '$99',
      description: 'Advance Plane',
      features: [
        'All Features is Available',
        'High Definition Full-screen',
        '24/7 phone and email support'
      ]
    }
  ];
}
