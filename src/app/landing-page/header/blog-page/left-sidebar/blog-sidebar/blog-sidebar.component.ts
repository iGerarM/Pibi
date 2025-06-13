import { Component } from '@angular/core';
import * as landingData from '../../../../../shared/data/component/landing/landing';

@Component({
    selector: 'app-blog-sidebar',
    templateUrl: './blog-sidebar.component.html',
    styleUrls: ['./blog-sidebar.component.scss'],

})
export class BlogSidebarComponent {
  public recentBlogs = landingData.recentBlogs;
  public popularBlogs = landingData.popularBlogs;
  public tags = landingData.tags;

}
