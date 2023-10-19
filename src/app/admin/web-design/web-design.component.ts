import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { design } from '../interfaces/design.interface';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';  
import { DataService } from 'src/app/services/data.service';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.scss']
})
export class WebDesignComponent implements OnInit {

  photoUrl:any="";
  controlItem:string ="";
  formData = new FormData();
  designList:design[]=[]
  api_link="http://markitingwebsite-001-site1.dtempurl.com";

  updateObject:design={
    id:0,
    image:""
  }

  constructor( private formBuilder:FormBuilder , private route : Router, private http:HttpClient, private dataServ:DataService) {
    this.controlShow("showData")
    this.getData()
   }

  ngOnInit(): void {
  }

  getData(){
    this.dataServ.getOurWorks().subscribe(data=>{
      this.designList=data
    })
  }
  
  submit(){
    if(this.controlItem=="add"){
      this.dataServ.createOurWorks(this.formData).subscribe(
        (response: any) => {
          console.log('File uploaded successfully', response);
        },
        (error: any) => {
          console.error('Error uploading file', error);
        }
       )
    }else {
      this.dataServ.updateOurWorks(this.updateObject.id,this.formData).subscribe(
        (response: any) => {
          console.log('File uploaded successfully', response);
        },
        (error: any) => {
          console.error('Error uploading file', error);
        }
       )
    }
    setTimeout(()=> this.controlShow("showData") , 700)
  }


  fileUploaded(event:any){
      this.formData=new FormData;
      const  file =event.target.files[0];
      this.formData.append('file', file);

// code should be ... because we want to send file as it is created in => event.target.files[0] - not to add it again to formdata

    //  this.design.patchValue({
    //   image:event.target.files[0]
    // })
    //  this.dataServ.createOurWorks(this.design.value).subscribe(
    //   (response) => {
    //     console.log('File uploaded successfully', response);
    //   },
    //   (error) => {
    //     console.error('Error uploading file', error);
    //   }
    //  )
    
  }

  editItem(item:design){
    this.updateObject=item;
  }

  deleteItem(id:number){
    this.dataServ.deleteOurWorks(id);
    console.log(id)
    setTimeout(()=> this.controlShow("showData") , 700)
  }
  
  controlShow(data:string){
    this.controlItem=data;
    if(data=="showData"){
      this.designList=[];
      this.getData()
    }
  }






  

}
