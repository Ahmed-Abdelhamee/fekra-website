import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  adminLogin=this.formBuilder.group({
    email:["",Validators.required],
    pass:["",Validators.required]
  })

  errorView:boolean=false;

  constructor( private formBuilder:FormBuilder , private route : Router) { }

  ngOnInit(): void {
  }

  login(){
    if (this.adminLogin.get("email")?.value=="fekra@admin" && this.adminLogin.get("pass")?.value=="admin-f-2023"){
      this.route.navigate(["/admin/advertisment"])
      sessionStorage.setItem("Admin","welcomeAdminfekra")
    }
    else{
      this.errorView=true
    }
    console.log(this.adminLogin.value)

  }

}
