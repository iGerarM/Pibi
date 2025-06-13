import { Component } from '@angular/core';
import * as statusData from '../../../../shared/data/component/leftsidebar/leftsidebar';
import {NgStyle } from '@angular/common';

@Component({
    selector: 'app-integratin',
    templateUrl: './integratin.component.html',
    styleUrls: ['./integratin.component.scss'],
    imports: [NgStyle]
})
export class IntegratinComponent {
  public items = statusData.items;
  public isBlockOpen: boolean = false;
 
  toggleBlock() {
    this.isBlockOpen = !this.isBlockOpen;
  }
}
