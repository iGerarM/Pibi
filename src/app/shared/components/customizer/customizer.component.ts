import { Component } from '@angular/core';
import { SidebarTypeComponent } from './sidebar-type/sidebar-type.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';
import { LayoutSettingComponent } from './layout-setting/layout-setting.component';
import { ColorComponent } from './color/color.component';

@Component({
    selector: 'app-customizer',
    templateUrl: './customizer.component.html',
    styleUrls: ['./customizer.component.scss'],
    imports: [ColorComponent, LayoutSettingComponent, WallpaperComponent, SidebarTypeComponent]
})
export class CustomizerComponent {

}
