import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { advertisment } from '../interfaces/advertisment.interface';

@Component({
  selector: 'app-advertisment',
  templateUrl: './advertisment.component.html',
  styleUrls: ['./advertisment.component.scss']
})
export class AdvertismentComponent implements OnInit {
  
  controlItem:string=""

  advertismentList:advertisment[]=[
    {
      name:"string",
      description:"stringstring"
    },
    {
      name:"Ahmed",
      description:"welcome"
    }
  ]

  advertisment=this.formBuilder.group({
    name:["", Validators.required],
    description:["", Validators.required],
  })


  constructor( private formBuilder:FormBuilder , private route : Router) { 
    this.controlShow('showData')
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.advertisment.value)
  }

  controlShow(data:string){
    this.controlItem=data;
  }

}
