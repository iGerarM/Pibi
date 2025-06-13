import { Component, HostListener } from '@angular/core';
import * as landingData from '../../shared/data/component/landing/landing';
import { NgComponentOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [RouterLink, NgComponentOutlet]
})
export class HeaderComponent {
  public menuItems = landingData.menuItems;
  public show: boolean = false;
  isFixed: boolean = false;
  public open: boolean = false;

  @HostListener('window:scroll', [])

  toggle(item: any) {
    this.menuItems.forEach((menuItem) => {
      if (menuItem === item) {
        menuItem.show = !menuItem.show;
      } else {
        menuItem.show = false;
      }
    });  }

  onScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isFixed = scrollPosition > 0;
  }

  showMenu(){
    this.open = !this.open
  }

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }
}
