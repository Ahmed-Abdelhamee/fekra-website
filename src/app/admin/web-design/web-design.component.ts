import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { design } from '../interfaces/design.interface';
import { HttpClient } from '@angular/common/http';
import { Api_link } from 'src/environments/environment';

@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.scss']
})
export class WebDesignComponent implements OnInit {

  photoUrl:any="";
  controlItem:string ="";
  fileSelected?:File;
  designList:design[]=[
    {photourl: "assets/a.jpg"},
    {photourl: "assets/animate_img.png"},
    {photourl: "assets/IMG1.jpg"},
  ]
  design=this.formBuilder.group({
    photourl:["", Validators.required],
  })
  
  constructor( private formBuilder:FormBuilder , private route : Router, private http:HttpClient) {
    this.controlShow("showData")
   }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.design.value)
    let formData= new FormData();
    formData.append("file" , this.fileSelected as any  )
  }

  // fileUpload(event:any):void{
  //   if (event.files && event.files[0]) {
  //       var reader = new FileReader();
  //       reader.onload = (e: any) => {
  //       this.photoUrl = e.target.result;
  //       console.log(e.target.result);
  //    }
  //     reader.readAsDataURL(event.files[0]);
  //   }
  // }




  fileUploaded(event:any):void{
    let file =event.target.files[0];
    let formData:FormData = new FormData();
    formData.append("myfile", file , file.name);
    console.log(formData)
    // this.http.post(` ......... ${Api_link} ........... `,formData).subscribe()
  }
  


  
  controlShow(data:string){
    this.controlItem=data;
  }

}
