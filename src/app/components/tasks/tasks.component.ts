import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  formdata:Task={
    text:"",
    day:"",
    reminder:true,
    id:0
  }

  constructor(private taskService: TaskService) {
    
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe( (tasks) => this.tasks = tasks);
  }
  
  deleteTask(task: Task): void {
    this.taskService.deleteTask(task)
    .subscribe(() => this.tasks =  this.tasks.filter(t => t.id !== task.id));
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
  
  addTask(): void {
    this.taskService.addTask(this.formdata)
      .subscribe();
  }



}
