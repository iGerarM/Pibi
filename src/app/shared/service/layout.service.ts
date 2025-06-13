import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public sidebarSetting = false;
  public sidebarClass = true
  public mobileBack = false;  
  addClassSubject: Subject<string> = new Subject<string>();
  removeClassSubject: Subject<string> = new Subject<string>();

  config = {
    color: 'color',
    layout: 'active',
    rtl: false,
    wallpaper: '',
    sidebar_type: 'three-column',
    sidebar_setting: true
  }

  constructor() { }

  togglePrimaryClass() {
    this.config.sidebar_setting = !this.config.sidebar_setting;
  } 
  
}
