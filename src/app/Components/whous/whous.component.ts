import { Component, OnInit } from '@angular/core';
import { WhoUs } from 'src/app/admin/interfaces/who-us.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-whous',
  templateUrl: './whous.component.html',
  styleUrls: ['./whous.component.scss']
})
export class WhousComponent implements OnInit {

  WhoUsDescription:WhoUs[]=[]

  constructor(private dataServ:DataService) {
    this.dataServ.getWhoUsDescription().subscribe(data =>{
      this.WhoUsDescription=data
    })
   }

  ngOnInit(): void {
  }

}
