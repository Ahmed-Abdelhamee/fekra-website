import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { advertisment } from '../interfaces/advertisment.interface';
import { DataService } from 'src/app/new-services/data.service';

@Component({
  selector: 'app-advertisment',
  templateUrl: './advertisment.component.html',
  styleUrls: ['./advertisment.component.scss']
})
export class AdvertismentComponent implements OnInit {
  
  controlItem:string=""

  updatedObject:advertisment={
    name:"",
    description:"",
    id:0
  };
  
  advertismentList:advertisment[]=[]

  advertisment=this.formBuilder.group({
    name:["", Validators.required],
    description:["", Validators.required],
    id:[new Date().getTime()]
  })

  constructor( private formBuilder:FormBuilder , private route : Router , private dataSrv:DataService) { 
    this.controlShow('showData')
  }

  ngOnInit(): void {

  }

  getAdvertisment(){
    this.advertismentList=[]
    this.dataSrv.getAdvertisment().subscribe(data =>{
      for (const key in data) {
        this.advertismentList.push(data[key])
      }
    })
  }

  submit(){
    if(this.controlItem=="add"){
      this.advertisment.patchValue({
        id:new Date().getTime()
      })
      this.dataSrv.createAdvertisment(this.advertisment.value)
    } else {
      this.dataSrv.getAdvertisment().subscribe(data =>{
        for (const key in data) {
          if(data[key].id==this.updatedObject.id){
            this.advertisment.patchValue({
              id:this.updatedObject.id
            })
            this.dataSrv.updateAdvertisment(key,this.advertisment.value);
          }
        }
      })
    }
    setTimeout(()=> { this.getAdvertisment() ; this.controlItem= "showData"}, 700)
  }

  deleteItem(id:number){
    this.dataSrv.getAdvertisment().subscribe(data =>{
        for (const key in data) {
        if(data[key].id==id){
          this.dataSrv.deleteAdvertisment(key);
        }
      }
    })
    setTimeout(()=> this.getAdvertisment() , 700)
  }

  updateItem(item:advertisment){
    this.updatedObject=item;
    this.controlItem="edit";
    this.advertisment.patchValue({
      name:item.name,
      description:item.description,
    })
  }

  controlShow(data:string){
    this.controlItem=data;
    if(this.controlItem=="add"){
      this.advertisment.patchValue({
        name:"",
        description:"",
      })
    }else  if(data =="showData"){
      this.getAdvertisment()
    }
  }

}
