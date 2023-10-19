import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { election } from '../interfaces/election.interface';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-election-campaigns',
  templateUrl: './election-campaigns.component.html',
  styleUrls: ['./election-campaigns.component.scss']
})
export class ElectionCampaignsComponent implements OnInit {

  photoUrl : any="" ;
  controlItem:string ="";

  election=this.formBuilder.group({
    image:[{}, Validators.required],
  })

  electionList:election[]=[ ]
  formData: FormData= new FormData();
  api_link="http://markitingwebsite-001-site1.dtempurl.com";
  updateObject:election={
    id:0,
    image:""
  }

  constructor( private formBuilder:FormBuilder , private route : Router, private dataServ:DataService) {
    this.controlShow("showData")
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.controlItem=="add"){
      this.dataServ.createElection(this.formData).subscribe(
        (response: any) => {
          console.log('File uploaded successfully', response);
        },
        (error: any) => {
          console.error('Error uploading file', error);
        }
       )
    }else {
      this.dataServ.updateElection(this.updateObject.id,this.formData).subscribe(
        (response: any) => {
          console.log('File uploaded successfully', response);
        },
        (error: any) => {
          console.error('Error uploading file', error);
        }
       )
    }
  }

  fileUploaded(event:any){
    this.formData=new FormData;
    const  file =event.target.files[0];
    this.formData.append('file', file);
  // code should be ... because we want to send file as it is created in => event.target.files[0] - not to add it again to formdata
    //  this.election.patchValue({
    //   image:event.target.files[0]
    // })
    //  this.dataServ.createElection(this.election.value).subscribe(
    //   (response) => {
    //     console.log('File uploaded successfully', response);
    //   },
    //   (error) => {
    //     console.error('Error uploading file', error);
    //   }
    //  )
  }

  getData(){
    this.dataServ.getElection().subscribe(data=>{
      this.electionList=data
    })
  // setTimeout(()=> console.log(this.electionList), 700)  // To give the matrix the opportunity to load data
  }

  editItem(item:election){
    this.updateObject=item;
  }
  
  deleteItem(id:number){
    this.dataServ.deleteElection(id);
    this.controlShow("showData")
  }

  // ----------------------- to vontrol the show -----------------------
  controlShow(data:string){
    this.controlItem=data;
    if(data=="showData"){
      this.electionList=[];
      setTimeout(() => { this.getData() }, 700);
    }
  }

}
