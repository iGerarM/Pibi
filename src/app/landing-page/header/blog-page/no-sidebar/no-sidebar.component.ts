import { Component } from '@angular/core';
import * as landingData from '../../../../shared/data/component/landing/landing';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-no-sidebar',
    templateUrl: './no-sidebar.component.html',
    styleUrls: ['./no-sidebar.component.scss'],
    imports: [RouterLink]
})
export class NoSidebarComponent {
  public blogItems = landingData.blogItems;

}
