import { Component, OnInit } from '@angular/core';
import { homeServices } from 'src/app/admin/interfaces/home.interface';
import { DataService } from 'src/app/new-services/data.service';
// import * as AOS from 'aos'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeServices :homeServices[]=[];

  constructor(private dataServ:DataService) { 
    dataServ.getHomeSerevices().subscribe(data =>{
      for (const key in data) {
          this.homeServices.push(data[key])
        }
    })
  }

  ngOnInit(): void {
    // AOS.init();
    
  }

}
