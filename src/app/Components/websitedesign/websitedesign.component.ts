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
  designList:design[]=[{id:0,image:"assets/IMG1.jpg"},{id:1,image:"assets/1-4.jpg"},{id:2,image:"assets/IMG2.jpg"},{id:4,image:"assets/IMG4.jpg"}];
  designListShow:design[]=[]

  // designList:design[]=[];
  // api_link="http://markitingwebsite-001-site1.dtempurl.com"
  constructor(private dataServ:DataService) {
    this.dataServ.getOurWorks().subscribe(data=>{
      for (const key in data) {
        this.designList.push(data[key])
      }
    })
   }

  ngOnInit(): void {
    setTimeout(() => {
      if(window.innerWidth > 700 ){
        for(let i=0 ; i < 3 ; i++ ){
          this.designListShow.push(this.designList[i])
        }
      }else{
        for(let i=0 ; i < this.designList.length ; i++ ){
          this.designListShow.push(this.designList[i])
        }
      }
    }, 500); // to wait the constructor ;oad the data in the Array , then we set If statement
  }

  scroll_list_to_right(){
    let itemDeleted=this.designList.pop()!
    this.designList.unshift(itemDeleted)
    this.designListShow=[]
    for(let i=0 ; i < 3 ; i++ ){
      this.designListShow.push(this.designList[i])
    }
  }

  scroll_list_to_left(){
    let itemDeleted=this.designList.shift()!
    this.designList.push(itemDeleted)
    this.designListShow=[]
    for(let i=0 ; i < 3 ; i++ ){
      this.designListShow.push(this.designList[i])
    }
  }

}
