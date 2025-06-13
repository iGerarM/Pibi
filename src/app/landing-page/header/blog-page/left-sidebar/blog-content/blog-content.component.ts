import { Component } from '@angular/core';
import * as landingData from '../../../../../shared/data/component/landing/landing';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-content',
    templateUrl: './blog-content.component.html',
    styleUrls: ['./blog-content.component.scss'],
    imports: [ RouterLink]
})
export class BlogContentComponent {
  public blogs = landingData.blogs;

}
