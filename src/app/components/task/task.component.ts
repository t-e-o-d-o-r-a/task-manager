import {Component, Input} from '@angular/core';
import {Task} from "../../task.model";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input() task!: Task;


}
