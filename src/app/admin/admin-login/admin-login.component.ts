import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from 'src/app/new-services/admin-auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  adminLogin=this.formBuilder.group({
    email:["",Validators.required],
    pass:["",Validators.required]
  })!;

  errorView:boolean=false;

  constructor( private formBuilder:FormBuilder , private route : Router, private auth:AdminAuthService) { }

  ngOnInit(): void {
  }

  login(){
    // static login for use will building the dash
    // if (this.adminLogin.get("email")?.value=="fekra@admin" && this.adminLogin.get("pass")?.value=="admin-f-2023"){
    //   this.route.navigate(["/admin/home"])
    //   sessionStorage.setItem("Admin","welcomeAdminfekra")
    // }
    // else{
    //   this.errorView=true
    // }

    this.auth.login(this.adminLogin.value).then(()=> {
      this.route.navigate(["/admin-dash/home"]);
      sessionStorage.setItem("Admin","welcomeAdminfekra")
    }).catch(()=>{
      this.errorView=true;
      sessionStorage.removeItem("Admin");
      }
    )
  }

}
