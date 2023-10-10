import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { election } from '../interfaces/election.interface';

@Component({
  selector: 'app-election-campaigns',
  templateUrl: './election-campaigns.component.html',
  styleUrls: ['./election-campaigns.component.scss']
})
export class ElectionCampaignsComponent implements OnInit {

  photoUrl : any="" ;
  controlItem:string ="";

  election=this.formBuilder.group({
    photourl:["", Validators.required],
  })

  electionList:election[]=[
    {photourl: "assets/a.jpg"},
    {photourl: "assets/animate_img.png"},
    {photourl: "assets/IMG1.jpg"},
  ]

  constructor( private formBuilder:FormBuilder , private route : Router) {
    this.controlShow('showData')
   }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.election.value);
  }

  fileUpload(event:any){
      if (event.files && event.files[0]) {
          var reader = new FileReader();
          reader.onload = (e: any) => {
          this.photoUrl = e.target.result;
      }
        reader.readAsDataURL(event.files[0]);
    }
  }

  controlShow(data:string){
    this.controlItem=data;
  }
}
