import { Component, ViewChild } from '@angular/core';
import * as rightsidebarData from '../../../shared/data/component/rightsidebar/rightsidebar';
import { TodoModalComponent } from './todo-modal/todo-modal.component';
import { ToDoContentComponent } from './to-do-content/to-do-content.component';
import { CloseAppsComponent } from '../close-apps/close-apps.component';

@Component({
    selector: 'app-to-do',
    templateUrl: './to-do.component.html',
    styleUrls: ['./to-do.component.scss'],
    imports: [CloseAppsComponent, ToDoContentComponent, TodoModalComponent]
})
export class ToDoComponent {
  public tabItems = rightsidebarData.tabItems;
  
  @ViewChild("todoModal")todoModal!: TodoModalComponent;

  toggleActive(item: { title: string; isActive: boolean; type: string; }) {
    this.tabItems.forEach((tabItem) => {
      tabItem.isActive = (tabItem === item);
    });
  }
   
  tabActive(type: string) {
    return this.tabItems.some(item => item.type === type && item.isActive);
  }
}
