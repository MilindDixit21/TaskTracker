import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  title :string = "Task Tracker";
  showAddTask:boolean =false;
  subcription: Subscription = new Subscription;
      
  constructor(private uiService: UiService, private router: Router){
    this.subcription = this.uiService
    .onToggle()
    .subscribe((value)=> this.showAddTask = value)
  }

  ngOnInit(): void {}
  

  toggleAddTask(){
    this.uiService.toggleAddTask(); 
  }

  hasRoute(route:string){
    console.log(this.router.url);
    console.log(route);
       
    return this.router.url === route;
  }

}
