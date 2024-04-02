import { Component } from '@angular/core';
import {Task} from "../../task.model";

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.css'
})
export class FormTaskComponent {

  tasks: Task[] = [
    new Task('Kupi mleko', 'Idi do prodavnice', 0),
    new Task('Domaci mobilno', 'Uradi angular domaci', 1),
    new Task('Fakultet', 'Idi na nastavu', 1),
  ];

  title: string = '';
  description: string = '';
  priority: number = 0; //0-low, 1-high
  message: string = '';

  submitForm() {
    if (this.title.length === 0) {
      this.message = 'Please fill in the task title.';
      return;
    }
    if (this.description.length === 0) {
      this.message = 'Please fill in the task description.';
      return;
    }

    this.tasks = [new Task(this.title, this.description, this.priority), ...this.tasks];

    this.message = 'Task saved!';

    setTimeout(() => {
      this.title = '';
      this.description = '';
      this.priority = 0;
      this.message=''
    }, 2000);
  }
}
