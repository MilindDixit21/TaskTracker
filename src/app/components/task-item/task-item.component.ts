import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  
  @Input() task!:Task;
  faTimes = faTimes;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminderTask :EventEmitter<Task> = new EventEmitter();

  ngOnInit(): void {    
  }   

  onDelete(task:Task){
    this.onDeleteTask.emit(task);  
  }
  onToggleReminder(task:Task){
    this.onToggleReminderTask.emit(task);
  }

}



