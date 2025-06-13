import { CommonModule } from '@angular/common';
import { Component, HostListener, Renderer2 } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { mainNav } from '../../shared/data/component/main-nav/main-nav';
import { LayoutService } from '../../shared/service/layout.service';
import { MainNavService } from '../../shared/service/main-nav/main-nav.service';
import { LoginComponent } from './login/login.component';

@Component({
    selector: 'app-main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.scss'],
    imports: [
        NgbTooltip,
        CommonModule,
        LoginComponent,
    ]
})
export class MainNavComponent {
  public isActive: number = 0;
  public mainnav = mainNav.mainnav;
  public dark = false;

  constructor(public mainNavService: MainNavService, public layoutService: LayoutService, private renderer: Renderer2) { }
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    // Call a function to handle the window resize event
    this.handleResponsiveClass();
  }
  setActive(index: number) {
    this.isActive = index;
  }

  setActiveItem(index: number) {
    this.mainnav.forEach((item, i) => {
      item.isActive = i === index;
      this.mainNavService.setActiveItem(this.mainnav[index].id);
    });
    this.handleResponsiveClass()
  }

  handleResponsiveClass() {
    const screenWidth = window.innerWidth;
    const isResponsive = screenWidth < 768;

    if (isResponsive) {
      this.mainNavService.activeApp = false;
    }
  }


  layoutToggle(): void {
    this.dark = !this.dark;
    document.body.classList.toggle('dark');
  }
}
