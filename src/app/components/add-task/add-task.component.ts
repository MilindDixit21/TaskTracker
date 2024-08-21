import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string = "";
  day: string ="";
  reminder: boolean = false;
  showAddTask:boolean = false;
  subscription: Subscription = new Subscription;
  
  @Output() onAddTask:EventEmitter<Task> = new EventEmitter();
  
  constructor( private uiService: UiService){
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value)=>(this.showAddTask = value))
  }

  ngOnInit(): void {}
  
  onSubmit(){
    if(!this.text){
      alert('Please add a task!');
    return;
    }
    const newTask = {
      text:this.text,
      day:this.day,
      reminder:this.reminder
    };

    // @todo - emit event
    this.onAddTask.emit(newTask);

    // clear form after submitting...
    this.text ='';
    this.day='';
    this.reminder=false;
    
  }

}
