import { Component } from '@angular/core';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';

@Component({
    selector: 'app-left-sidebar',
    templateUrl: './left-sidebar.component.html',
    styleUrls: ['./left-sidebar.component.scss'],
    imports: [BlogSidebarComponent, BlogContentComponent]
})
export class LeftSidebarComponent {

}
