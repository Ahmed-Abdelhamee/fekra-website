import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-election-campaigns',
  templateUrl: './election-campaigns.component.html',
  styleUrls: ['./election-campaigns.component.scss']
})
export class ElectionCampaignsComponent implements OnInit {

  constructor( private formBuilder:FormBuilder , private route : Router) { }

  election=this.formBuilder.group({
    photourl:["", Validators.required],
  })

  ngOnInit(): void {
  }
  submit(){
    
  }
}
