import { Component } from '@angular/core';
import * as landingData from '../../../../shared/data/component/landing/landing';
import { FormsModule } from '@angular/forms';
import { BlogSidebarComponent } from '../left-sidebar/blog-sidebar/blog-sidebar.component';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
    imports: [BlogSidebarComponent,  FormsModule]
})
export class DetailsComponent {
  public blogItems = landingData.details;
  public comments = landingData.comments;
}
