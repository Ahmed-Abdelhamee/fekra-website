import { Component, OnInit } from '@angular/core';
import { design } from 'src/app/admin/interfaces/design.interface';
import { DataService } from 'src/app/new-services/data.service';
import  * as AOS from 'aos' ;

@Component({
  selector: 'app-websitedesign',
  templateUrl: './websitedesign.component.html',
  styleUrls: ['./websitedesign.component.scss']
})
export class WebsitedesignComponent implements OnInit {
  designList:design[]=[];
  designListShow:design[]=[];

  leftOrRight:string="";

  // designList:design[]=[];
  // api_link="http://markitingwebsite-001-site1.dtempurl.com"
  constructor(private dataServ: DataService) {
    this.dataServ.getOurWorks().subscribe({
      next: data => {
        for (const key in data) {
          this.designList.push(data[key])
        }
      },
      complete:()=>{
        if(window.innerWidth > 700 ){
          for(let i=0 ; i < 3 ; i++ ){
            this.designListShow.push(this.designList[i])
          }
        }else{
          for(let i=0 ; i < this.designList.length ; i++ ){
            this.designListShow.push(this.designList[i])
          }
        }
      }
    })
  }

  ngOnInit(): void {
    AOS.init();
  }

  scroll_list_to_right(){
    this.leftOrRight="rightScroll";
    let itemDeleted=this.designList.pop()!
    this.designList.unshift(itemDeleted)
    this.designListShow=[]
    for(let i=0 ; i < 3 ; i++ ){
      this.designListShow.push(this.designList[i])
    }
  }

  scroll_list_to_left(){
    this.leftOrRight="leftScroll";
    let itemDeleted=this.designList.shift()!;
    this.designList.push(itemDeleted)
    this.designListShow=[]
    for(let i=0 ; i < 3 ; i++ ){
      this.designListShow.push(this.designList[i])
    }
  }

}
