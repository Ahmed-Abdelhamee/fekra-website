import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.scss']
})
export class WebDesignComponent implements OnInit {

  constructor( private formBuilder:FormBuilder , private route : Router) { }

  design=this.formBuilder.group({
    photourl:["", Validators.required],
  })

  ngOnInit(): void {
  }

  submit(){
    
  }

}
