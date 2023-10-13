import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { advertisment } from '../interfaces/advertisment.interface';
import { DataService } from 'src/app/services/data.service';

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
  })

  constructor( private formBuilder:FormBuilder , private route : Router , private dataSrv:DataService) { 
    this.controlShow('showData')
    dataSrv.getAdvertisments().subscribe(data =>{
      this.advertismentList=data
    })
  }

  ngOnInit(): void {

  }

  getAdvertisment(){
      this.advertismentList=[]
      this.dataSrv.getAdvertisments().subscribe(data =>{
      this.advertismentList=data
    })
  }

  submit(){
    if(this.controlItem=="add")
      this.dataSrv.createAdvertisments(this.advertisment.value)
    else {
      this.dataSrv.updateAdvertisments(this.updatedObject.id,this.advertisment.value);
      setTimeout(()=> { this.getAdvertisment() ; this.controlItem= "showData"}, 400)
    }
  }

  deleteItem(id:number){
    this.dataSrv.deleteAdvertisments(id);
    setTimeout(()=> this.getAdvertisment() , 400)
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
