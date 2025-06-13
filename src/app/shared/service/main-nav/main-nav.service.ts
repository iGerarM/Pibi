import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LayoutService } from '../layout.service';

@Injectable({
  providedIn: 'root',
})
export class MainNavService {
  public mainNavId: number | any;
  public sidebarIdSubject: Subject<number> = new Subject<number>();
  public isPrimary: boolean = false;
  public activeApp = true;

  constructor( public layoutService: LayoutService){
    document.body.classList.add('sidebar-active')
    document.body.classList.add('main-page')
  }

  setActiveItem(Id: number) {
    this.mainNavId = Id;
    this.sidebarIdSubject.next(Id);
  }

  closeApp(){
    this.activeApp = !this.activeApp;
    this.layoutService.sidebarClass =  !this.layoutService.sidebarClass
    if(!this.activeApp) {
      document.body.classList.remove('sidebar-active')
      document.body.classList.remove('main-page')
    } else {
      document.body.classList.add('sidebar-active')
      document.body.classList.add('main-page')
    }
  }
}
