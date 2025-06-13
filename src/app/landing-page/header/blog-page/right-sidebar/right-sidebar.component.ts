import { Component } from '@angular/core';
import { BlogSidebarComponent } from '../left-sidebar/blog-sidebar/blog-sidebar.component';
import { BlogContentComponent } from '../left-sidebar/blog-content/blog-content.component';

@Component({
    selector: 'app-right-sidebar',
    templateUrl: './right-sidebar.component.html',
    styleUrls: ['./right-sidebar.component.scss'],
    imports: [BlogContentComponent, BlogSidebarComponent]
})
export class RightSidebarComponent {

}
