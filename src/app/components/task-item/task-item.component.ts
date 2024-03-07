import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  faTimes = faTimes;
  
  @Input() task: Task = {

  };


  @Output() onDeleteElement: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  
  constructor() {

  }

  ngOnInit(): void {
  
  }

  onDelete(task: Task) {
    this.onDeleteElement.emit(task);
  
    
    
  }



  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
