import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
    imports: [ RouterLink]
})
export class BreadcrumbComponent {
  @Input() title: any;
  @Input() items!: any[];
  @Input() active_item: any;
}
