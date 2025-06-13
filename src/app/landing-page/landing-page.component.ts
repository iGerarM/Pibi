import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from '../shared/components/breadcrumb/breadcrumb.component';
import { TapToTopComponent } from '../shared/components/tap-to-top/tap-to-top.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    imports: [HeaderComponent, CommonModule, BreadcrumbComponent, RouterOutlet, FooterComponent, TapToTopComponent, TitleCasePipe]
})
export class LandingPageComponent {

  public url: string = '';
  private routerSubscription: Subscription = new Subscription();

  constructor( private router: Router) { }

  ngOnInit() {
    // Get initial URL
    this.url = this.router.url;
    console.log('Current path:', this.url);

    // Subscribe to router events
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.url = event.urlAfterRedirects; // Use urlAfterRedirects for accurate URL after redirects
        console.log('Current path:', this.url);
      }
    });
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    this.routerSubscription.unsubscribe();
  }

}
