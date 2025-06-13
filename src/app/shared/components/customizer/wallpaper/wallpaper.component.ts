import { Component } from '@angular/core';
import { LayoutService } from '../../../service/layout.service';

@Component({
    selector: 'app-wallpaper',
    templateUrl: './wallpaper.component.html',
    styleUrls: ['./wallpaper.component.scss'],
})
export class WallpaperComponent {


  constructor( public layoutService: LayoutService){}

  selectWallpaper(wallpaper?: string){
    this.layoutService.config.wallpaper = wallpaper!
  }
}
