import { Component } from '@angular/core';
import {  NgClass, NgStyle } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-recent-slider',
    templateUrl: './recent-slider.component.html',
    styleUrls: ['./recent-slider.component.scss'],
    imports: [CarouselModule, NgClass, NgStyle]
})
export class RecentSliderComponent {

  customOptions = {
    loop: true,
    nav: false,
    dot: false,
    margin: 10,
    autoplay:true,
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 6
      },
      768: {
        items: 3
      },
      1000: {
        items: 3
      }
    },
    
  };

  items = [
    {
      dotColor: 'dot-danger',
      imageSrc: 'assets/images/avtar/1.jpg',
      name: 'John deo',
      isOnline: false,
    },
    {
      dotColor: 'dot-success',
      imageSrc: 'assets/images/avtar/big/audiocall.jpg',
      name: 'John',
      isOnline: true,
    },
    {
      dotColor: 'dot-warning',
      imageSrc: 'assets/images/avtar/2.jpg',
      name: 'Jpny',
      isOnline: false,
    },
    {
      dotColor: 'dot-danger',
      imageSrc: 'assets/images/avtar/1.jpg',
      name: 'John deo',
      isOnline: false,
    },
    {
      dotColor: 'dot-success',
      imageSrc: 'assets/images/avtar/big/audiocall.jpg',
      name: 'John',
      isOnline: true,
    },
    {
      dotColor: 'dot-warning',
      imageSrc: 'assets/images/avtar/2.jpg',
      name: 'Jpny',
      isOnline: false,
    },
    {
      dotColor: 'dot-danger',
      imageSrc: 'assets/images/avtar/1.jpg',
      name: 'John deo',
      isOnline: false,
    },
    {
      dotColor: 'dot-success',
      imageSrc: 'assets/images/avtar/big/audiocall.jpg',
      name: 'John',
      isOnline: true,
    },
    {
      dotColor: 'dot-warning',
      imageSrc: 'assets/images/avtar/2.jpg',
      name: 'Jpny',
      isOnline: false,
    },
    {
      dotColor: 'dot-danger',
      imageSrc: 'assets/images/avtar/1.jpg',
      name: 'John deo',
      isOnline: false,
    },
    {
      dotColor: 'dot-success',
      imageSrc: 'assets/images/avtar/big/audiocall.jpg',
      name: 'John',
      isOnline: true,
    },
    {
      dotColor: 'dot-warning',
      imageSrc: 'assets/images/avtar/2.jpg',
      name: 'Jpny',
      isOnline: false,
    },
  ];
}
