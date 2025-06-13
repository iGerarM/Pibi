import { Component } from '@angular/core';
import * as data from '../../../../shared/data/component/rightsidebar/rightsidebar';

@Component({
    selector: 'app-to-do-content',
    templateUrl: './to-do-content.component.html',
    styleUrls: ['./to-do-content.component.scss'],

})
export class ToDoContentComponent {

  public todoTasks :any = data.todoTasks;
  
  toggle(task: { toggle: boolean; }){
    task.toggle = !task.toggle;
  }
}
