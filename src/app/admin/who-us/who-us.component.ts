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

  servicesPhotoUrl:any=""
  teamPhotoUrl:any=""
  clientPhotoUrl:any=""

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
    name:["", Validators.required],
  })

  our_clients=this.formBuilder.group({
    photourl:["", Validators.required],
  })



  ngOnInit(): void {
  }

  showpart(part:string){
    this.view_part=part
  }

  submitWhoUs(){
    console.log(this.who_us.value)
  }

  submitServices(){
    console.log(this.services.value)
  }

  submitOurTeam(){
    console.log(this.our_team.value)
  }

  submitOurClients(){
    console.log(this.our_clients.value)
  }


  servicesfileUpload(event:any){
    if (event.files && event.files[0]) {
        var reader = new FileReader();
        reader.onload = (e: any) => {
        this.services.patchValue({
          photourl: e.target.result
        })
        this.servicesPhotoUrl= e.target.result
      }
      reader.readAsDataURL(event.files[0]);
    }
  }


  ourTeamfileUpload(event:any){
    if (event.files && event.files[0]) {
        var reader = new FileReader();
        reader.onload = (e: any) => {
        this.our_team.patchValue({
          photourl: e.target.result
        })
        this.teamPhotoUrl= e.target.result
    }
      reader.readAsDataURL(event.files[0]);
    }
  }



  clientfileUpload(event:any){
    if (event.files && event.files[0]) {
        var reader = new FileReader();
        reader.onload = (e: any) => {
        this.our_clients.patchValue({
          photourl: e.target.result
        })
        this.clientPhotoUrl= e.target.result
    }
      reader.readAsDataURL(event.files[0]);
    }
  }


}
