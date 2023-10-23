import { Component, OnInit } from '@angular/core';
import { OurClients, OurTeam, Services, WhoUs } from 'src/app/admin/interfaces/who-us.interface';
import { DataService } from 'src/app/new-services/data.service';

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

  // api_link="http://markitingwebsite-001-site1.dtempurl.com";

  constructor(private dataServ:DataService) {
    this.dataServ.getWhoUsDescription().subscribe(data =>{
      for (const key in data) {
        this.WhoUsDescription.push(data[key])
        }
    })
    this.dataServ.getWhoUsServices().subscribe(data =>{
      for (const key in data) {
        this.WhoUsServices.push(data[key])
        }
    })
    this.dataServ.getWhoUsTeamWorks().subscribe(data =>{
      for (const key in data) {
        this.WhoUsOurTeam.push(data[key])
        }
    })
    this.dataServ.getWhoUsOurClients().subscribe(data =>{
      for (const key in data) {
        this.WhoUsOurClients.push(data[key])
        }
    })
   }

  ngOnInit(): void {
  }

}
