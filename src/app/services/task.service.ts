import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  markCompleted(task: any) {
    task.completed = !task.completed;
  }

  editTask(tasks: Task[], updatedTask: Task, index: number) {
    tasks[index] = updatedTask;
  }

  deleteTask(tasks: any[], index: number) {
    const confirmation = confirm('Are you sure you want to delete this task?');
    if (confirmation) {
      tasks.splice(index, 1);
    }
  }
}
