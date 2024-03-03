import { Component, OnInit } from '@angular/core';
import { election } from 'src/app/admin/interfaces/election.interface';
import { electionPDF } from 'src/app/admin/interfaces/electionPDF.interface';
import { electionSamples } from 'src/app/admin/interfaces/electionSamples.interface';
import { DataService } from 'src/app/new-services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-electioncampaigns',
  templateUrl: './electioncampaigns.component.html',
  styleUrls: ['./electioncampaigns.component.scss']
})
export class ElectioncampaignsComponent implements OnInit {

  electionList:election[]=[];
  electionListPdf:electionPDF[]=[];
  electionListSamples:electionSamples[]=[];
  // api_link="http://markitingwebsite-001-site1.dtempurl.com";

  constructor(private dataServ:DataService) {
    this.dataServ.getElection().subscribe(data=>{
      for (const key in data) {
        this.electionList.push(data[key])
      }
    })
    this.dataServ.getElectionPDF().subscribe(data=>{
      for (const key in data) {
        this.electionListPdf.push(data[key])
      }
    })
    this.dataServ.getElectionSamples().subscribe(data=>{
      for (const key in data) {
        this.electionListSamples.push(data[key])
      }
    })
   }

  ngOnInit(): void {
  }

}
