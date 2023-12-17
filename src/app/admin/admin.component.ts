import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  dash_list:boolean=true;
  
  constructor(private route:Router){
    route.events.subscribe( e =>{
      if(e instanceof NavigationEnd){
        if(route.url.endsWith("admin-dash")){
          this.dash_list=false;
        }else{
          this.dash_list=true;
        }
      }
    })
  }
  ngOnInit(): void {
  }

}
