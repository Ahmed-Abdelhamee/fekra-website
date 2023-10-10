import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertisment',
  templateUrl: './advertisment.component.html',
  styleUrls: ['./advertisment.component.scss']
})
export class AdvertismentComponent implements OnInit {

  constructor( private formBuilder:FormBuilder , private route : Router) { }

  advertisment=this.formBuilder.group({
    name:["", Validators.required],
    description:["", Validators.required],
  })

  ngOnInit(): void {
  }

  submit(){
    console.log(this.advertisment.value)
  }

}
