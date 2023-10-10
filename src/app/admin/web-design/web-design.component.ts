import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { design } from '../interfaces/design.interface';

@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.scss']
})
export class WebDesignComponent implements OnInit {

  photoUrl:any="";
  controlItem:string ="";
  designList:design[]=[
    {photourl: "assets/a.jpg"},
    {photourl: "assets/animate_img.png"},
    {photourl: "assets/IMG1.jpg"},
  ]
  design=this.formBuilder.group({
    photourl:["", Validators.required],
  })
  
  constructor( private formBuilder:FormBuilder , private route : Router) {
    this.controlShow("showData")
   }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.design.value)
  }

  fileUpload(event:any){
    if (event.files && event.files[0]) {
        var reader = new FileReader();
        reader.onload = (e: any) => {
        this.photoUrl = e.target.result;
    }
      reader.readAsDataURL(event.files[0]);
    }
  }
  
  controlShow(data:string){
    this.controlItem=data;
  }

}
