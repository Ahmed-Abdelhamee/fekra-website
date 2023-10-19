import { Component, OnInit } from '@angular/core';
import { design } from 'src/app/admin/interfaces/design.interface';
import { election } from 'src/app/admin/interfaces/election.interface';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-electioncampaigns',
  templateUrl: './electioncampaigns.component.html',
  styleUrls: ['./electioncampaigns.component.scss']
})
export class ElectioncampaignsComponent implements OnInit {

  electionList:election[]=[];
  api_link="http://markitingwebsite-001-site1.dtempurl.com";
  constructor(private dataServ:DataService) {
    this.dataServ.getElection().subscribe(data=>{
      this.electionList=data
    })
   }

  ngOnInit(): void {
  }

}
