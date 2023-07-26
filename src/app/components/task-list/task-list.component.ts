import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
  // TODO: reformular como una lista de tareas
  tareas: ITask[] = [{
    title: 'Task 1',
    completed: false,
    level: 1,
    description: 'Task description 1',
  }, {
    title : 'Task 2',
    completed: true,
    level: 2,
    description: 'Task description 2',
  }];
  
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  deleteTask(task: ITask): void {
    alert(`se eliminara la tarea: ${task.title}`);
    let index = this.tareas.findIndex(task => task.title);
  };
}
