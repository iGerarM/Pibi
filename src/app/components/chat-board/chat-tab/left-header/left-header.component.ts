import { Component } from '@angular/core';

import { SearchComponent } from '../../search/search.component';
import { LayoutService } from '../../../../shared/service/layout.service';
import { MainNavService } from '../../../../shared/service/main-nav/main-nav.service';

@Component({
    selector: 'app-left-header',
    templateUrl: './left-header.component.html',
    styleUrls: ['./left-header.component.scss'],
    imports: [SearchComponent]
})
export class LeftHeaderComponent {
  public isOff: boolean = false;

  constructor(public layoutService: LayoutService, public maniNavService: MainNavService){}
  toggleOff() {
    this.isOff = !this.isOff;
  }

  close(){
    this.layoutService.mobileBack = false;
  }
}
