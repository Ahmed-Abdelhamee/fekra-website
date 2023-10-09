import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-who-us',
  templateUrl: './who-us.component.html',
  styleUrls: ['./who-us.component.scss']
})
export class WhoUsComponent implements OnInit {

  view_part:string=""

  constructor( private formBuilder:FormBuilder , private route : Router) { 
    this.showpart('who-us')
  }

  who_us=this.formBuilder.group({
    description:["", Validators.required],
  })

  services=this.formBuilder.group({
    photourl:["", Validators.required],
    description:["", Validators.required],
  })

  our_team=this.formBuilder.group({
    photourl:["", Validators.required],
    description:["", Validators.required],
  })

  our_clients=this.formBuilder.group({
    photourl:["", Validators.required],
  })



  ngOnInit(): void {
  }

  showpart(part:string){
    this.view_part=part
  }

  submit(){
    
  }

}
