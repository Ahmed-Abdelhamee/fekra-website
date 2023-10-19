import { Component, OnInit } from '@angular/core';
import { OurClients, WhoUs } from 'src/app/admin/interfaces/who-us.interface';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-whous',
  templateUrl: './whous.component.html',
  styleUrls: ['./whous.component.scss']
})
export class WhousComponent implements OnInit {

  WhoUsDescription:WhoUs[]=[];
  WhoUsOurClients:OurClients[]=[];

  api_link="http://markitingwebsite-001-site1.dtempurl.com";

  constructor(private dataServ:DataService) {
    this.dataServ.getWhoUsDescription().subscribe(data =>{
      this.WhoUsDescription=data
    })
    this.dataServ.getWhoUsOurClients().subscribe(data =>{
      this.WhoUsOurClients=data
    })
   }

  ngOnInit(): void {
  }

}
