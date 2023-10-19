import { Component, OnInit } from '@angular/core';
import { OurClients, OurTeam, Services, WhoUs } from 'src/app/admin/interfaces/who-us.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-whous',
  templateUrl: './whous.component.html',
  styleUrls: ['./whous.component.scss']
})
export class WhousComponent implements OnInit {

  WhoUsDescription:WhoUs[]=[];
  WhoUsOurClients:OurClients[]=[];
  WhoUsServices:Services[]=[];
  WhoUsOurTeam:OurTeam[]=[];

  api_link="http://markitingwebsite-001-site1.dtempurl.com";

  constructor(private dataServ:DataService) {
    this.dataServ.getWhoUsDescription().subscribe(data =>{
      this.WhoUsDescription=data
    })
    this.dataServ.getWhoUsServices().subscribe(data =>{
      this.WhoUsServices=data
    })
    this.dataServ.getWhoUsTeamWorks().subscribe(data =>{
      this.WhoUsOurTeam=data
    })
    this.dataServ.getWhoUsOurClients().subscribe(data =>{
      this.WhoUsOurClients=data
    })
   }

  ngOnInit(): void {
  }

}
