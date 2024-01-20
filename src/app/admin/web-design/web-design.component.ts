import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { design } from '../interfaces/design.interface';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';  
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { DataService } from 'src/app/new-services/data.service';

@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.scss']
})
export class WebDesignComponent implements OnInit {
  // formData = new FormData();
  // api_link="http://markitingwebsite-001-site1.dtempurl.com";

  // variables for controlling the viewe And Data  
  controlItem:string ="";
  uploadingImg:string="";
  // variables for save & act with data
  photoUrl:any="";
  designList:design[]=[];
  design=this.formBuilder.group({
    id:[new Date().getTime()],
    image:["",Validators.required]
  })
  updateObject:design={
    id:0,
    image:""
  }

  constructor( private formBuilder:FormBuilder , private firestorage : AngularFireStorage, private http:HttpClient, private dataServ:DataService) {
    this.controlShow("showData")
   }

  ngOnInit(): void {
  }

  // ------------- uploading File ------------
  async fileUploaded(event:any){
    this.uploadingImg="uploadingImg";
    const file=event.target.files[0];
    if(file){
      const path=`fekra/${new Date().getTime()}${file.name}`; // we make name of file in firebase storage 
      const uploadTask = await this.firestorage.upload(path,file)
      const url =await uploadTask.ref.getDownloadURL()
      this.photoUrl=url;
    }
    this.uploadingImg="imgUploaded";
    this.design.patchValue({
      image:this.photoUrl
    })
  }
//  -------------------- for control the view  with data ------------------
  controlShow(data:string){
    this.controlItem=data;
    if(data=="showData"){
      this.designList=[];
      this.getData()
    }else if(data=="add"){
      this.design.patchValue({
        image:""
      })
    }
  }

  // -------------  get data from API  -------------
  getData(){
    this.dataServ.getOurWorks().subscribe(data=>{
      for (const key in data) {
        this.designList.push(data[key])
      }
    })
  }
  // -------------  adding data to API  -------------
  submit(){
    if(this.controlItem=="add"){
      this.design.patchValue({
        id:new Date().getTime()
      })
      this.dataServ.createOurWorks(this.design.value)
    }else {
      this.dataServ.getOurWorks().subscribe(data=>{
        for (const key in data) {
          if(data[key].id == this.updateObject.id)
          this.dataServ.updateOurWorks(key,this.design.value)
        }
      })
    }
    setTimeout(()=> {this.controlShow("showData"); this.photoUrl="";} , 700)
  }
  // -------------  edit data to API  -------------
  editItem(item:design){
    this.updateObject=item;
    this.design.patchValue({
      id:item.id
    })
  }
  // -------------  edit data to API  -------------
  deleteItem(id:number){
    this.dataServ.getOurWorks().subscribe(data=>{
      for (const key in data) {
        if(data[key].id == id)
        this.dataServ.deleteOurWorks(key)
      }
    })
    setTimeout(()=> location.reload() , 700)
  }

}















// ------------------------------------------------- Asp.net ----------------------------------

  // -------------  adding data to API  -------------
  // code should be ... because we want to send file as it is created in => event.target.files[0] - not to add it again to formdata

  // this.formData=new FormData;
  // const  file =event.target.files[0];
  // this.formData.append('file', file);
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

  // submit(){
  //   if(this.controlItem=="add"){
  //     this.dataServ.createOurWorks(this.formData).subscribe(
  //       (response: any) => {
  //         console.log('File uploaded successfully', response);
  //       },
  //       (error: any) => {
  //         console.error('Error uploading file', error);
  //       }
  //      )
  //   }else {
  //     this.dataServ.updateOurWorks(this.updateObject.id,this.formData).subscribe(
  //       (response: any) => {
  //         console.log('File uploaded successfully', response);
  //       },
  //       (error: any) => {
  //         console.error('Error uploading file', error);
  //       }
  //      )
  //   }
  //   setTimeout(()=> location.reload() , 700)
  // }