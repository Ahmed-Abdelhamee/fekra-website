import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Validators, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/new-services/data.service';
import { Database } from '@angular/fire/database';
import { homeServices } from '../interfaces/home.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // for control the view 
  controlItem:string ="";
  uploadingImg:string="";
  // variables for getting the data 
  photoUrl : any="" ;
  homeServicesList:homeServices[]=[ ]
  // for add the image
  homeSerevices=this.formBuilder.group({
    image:["", Validators.required],
    title:["", Validators.required],
    text:["", Validators.required],
    id:[new Date().getTime()]
  })
  // for update the image 
  updateObject:homeServices={
    id:0,
    image:"",
    text:"",
    title:"",
  }

  constructor( private formBuilder:FormBuilder , private dataServ:DataService , private firestorage:AngularFireStorage) {
    this.controlShow("showData")
   }

  ngOnInit(): void {
  }

  // ----------------------- to control the show   with API  -----------------------
  controlShow(data:string){
    this.controlItem=data;
    if(data=="showData"){
      this.homeServicesList=[];
      setTimeout(() => { this.getData() }, 700);
    }else if(data=="add"){
      this.homeSerevices.patchValue({
        id:new Date().getTime(),
        image:"",
        text:"",
        title:"",
      })
    }
  }

  // -----------  for uploading image on firebase  ----------
  async uploadImg(event:any){
    this.uploadingImg="uploadingImg";
    const file=event.target.files[0];
    if(file){
      const path=`fekra/${new Date().getTime()}${file.name}`; // we make name of file in firebase storage 
      const uploadTask = await this.firestorage.upload(path,file)
      const url =await uploadTask.ref.getDownloadURL()
      this.photoUrl=url;
    }
    this.uploadingImg="imgUploaded";
    this.homeSerevices.patchValue({
      image:this.photoUrl
    })
  }



  // -------------------- get data for firebase  --------------------
  getData(){
    this.dataServ.getHomeSerevices().subscribe(data=>{
      for (const key in data) {
        this.homeServicesList.push(data[key])
      }
    })
  }
  // -------------- sending data to function() ----------------
  submit(){
    if(this.controlItem=="add"){
      this.dataServ.createHomeSerevices(this.homeSerevices.value)
    }else {
      this.dataServ.getHomeSerevices().subscribe(data=>{
        for (const key in data) {
          if(data[key].id==this.updateObject.id){
            this.dataServ.updateHomeSerevices(key,this.homeSerevices.value)
          }
        }
      })
    }
    setTimeout(() => { this.controlShow("showData"); this.photoUrl=""  }, 700);
  }
  // ----------------- to update data -------------------
  editItem(item:homeServices){
    this.updateObject=item;
    this.homeSerevices.patchValue({
      id:item.id,
      image:item.image,
      text:item.text,
      title:item.title,
    })
  }
  // ----------------- for deleting item -----------------
  deleteItem(id:number){
    this.dataServ.getHomeSerevices().subscribe(data=>{
      for (const key in data) {
        if(data[key].id==id)
          this.dataServ.deleteHomeSerevices(key);
      }
    })
    this.controlShow("showData")
  }



}
