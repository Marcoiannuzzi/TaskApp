import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task:ITask | undefined;
  @Output() deleteTaskEmiter : EventEmitter<ITask> = new EventEmitter<ITask>();
  
  deleteTask() {
    this.deleteTaskEmiter.emit(this.task);
  }

}
