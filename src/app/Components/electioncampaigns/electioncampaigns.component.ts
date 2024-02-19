import { Component, OnInit } from '@angular/core';
import { election } from 'src/app/admin/interfaces/election.interface';
import { DataService } from 'src/app/new-services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-electioncampaigns',
  templateUrl: './electioncampaigns.component.html',
  styleUrls: ['./electioncampaigns.component.scss']
})
export class ElectioncampaignsComponent implements OnInit {

  electionList:election[]=[];
  // api_link="http://markitingwebsite-001-site1.dtempurl.com";

  constructor(private dataServ:DataService) {
    if(sessionStorage.getItem("runCarsouel")!="election loaded"){
      sessionStorage.setItem("runCarsouel","election loaded")
      location.reload();
    }
    this.dataServ.getElection().subscribe(data=>{
      for (const key in data) {
        this.electionList.push(data[key])
      }
    })
   }

  ngOnInit(): void {
  }

}
