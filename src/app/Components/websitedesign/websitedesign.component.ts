import { Component, OnInit } from '@angular/core';
import { design } from 'src/app/admin/interfaces/design.interface';
import { DataService } from 'src/app/new-services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-websitedesign',
  templateUrl: './websitedesign.component.html',
  styleUrls: ['./websitedesign.component.scss']
})
export class WebsitedesignComponent implements OnInit {

  designList:design[]=[];
  // api_link="http://markitingwebsite-001-site1.dtempurl.com"
  constructor(private dataServ:DataService) {
    this.dataServ.getOurWorks().subscribe(data=>{
      for (const key in data) {
        this.designList.push(data[key])
      }
    })
   }

  ngOnInit(): void {
  }

}
