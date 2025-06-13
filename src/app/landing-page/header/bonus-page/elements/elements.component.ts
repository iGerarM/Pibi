import { Component } from '@angular/core';
import { NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLinkButton, NgbNavLinkBase, NgbNavContent, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';

@Component({
    selector: 'app-elements',
    templateUrl: './elements.component.html',
    styleUrls: ['./elements.component.scss'],
    imports: [FeatherIconsComponent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLinkButton, NgbNavLinkBase, NgbNavContent, NgbNavOutlet]
})
export class ElementsComponent {

  public active: 1;
}
