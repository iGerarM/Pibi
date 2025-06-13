import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DetailsComponent } from './header/blog-page/details/details.component';
import { LeftSidebarComponent } from './header/blog-page/left-sidebar/left-sidebar.component';
import { NoSidebarComponent } from './header/blog-page/no-sidebar/no-sidebar.component';
import { RightSidebarComponent } from './header/blog-page/right-sidebar/right-sidebar.component';
import { AboutComponent } from './header/bonus-page/about/about.component';
import { ElementsComponent } from './header/bonus-page/elements/elements.component';
import { FaqComponent } from './header/bonus-page/faq/faq.component';

export default [
  {
    path: '',
    component: ContentComponent,
  },
  {
    path: '',
    children: [
      {
        path: 'right-sidebar',
        component: RightSidebarComponent,
      },
      {
        path: 'left-sidebar',
        component: LeftSidebarComponent,
      },
      {
        path: 'details',
        component: DetailsComponent,
      },
      {
        path: 'no-sidebar',
        component: NoSidebarComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'elements',
        component: ElementsComponent,
      },
      {
        path: 'faq',
        component: FaqComponent,
      },
    ]
  }
] as Routes;
