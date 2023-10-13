import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-who-us',
  templateUrl: './who-us.component.html',
  styleUrls: ['./who-us.component.scss']
})
export class WhoUsComponent implements OnInit {

  view_part:string="";
  updatedObject:any;
  // data variables 
  list :any[]=[];
  servicesPhotoUrl:any=""
  teamPhotoUrl:any=""
  clientPhotoUrl:any=""

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

  constructor( private formBuilder:FormBuilder , private route : Router , private dataServ:DataService) { 
    this.showpart('who-us-showData')
    this.getDataFromAPI()
  }

  ngOnInit(): void {
  }

  showpart(part:string){
    this.view_part=part;
    if(this.view_part=="who-us-add"){
      this.who_us.patchValue({
        description:"",
      })
    }
  }


  // ------------------------- Who Us ---------------------

  submitWhoUs(){
    if(this.view_part=="who-us-add"){
      this.dataServ.createWhoUsDescription(this.who_us.value)
    }else{
      this.dataServ.updateWhoUsDescription(this.updatedObject.id,this.who_us.value)
    }
    setTimeout(() => { this.getDataFromAPI() }, 400); // to view data
    this.view_part="who-us-showData"  // to view data
  }

  // ------------------------------------------------------

  submitServices(){
    console.log(this.services.value)
  }
  submitOurTeam(){
    console.log(this.our_team.value)
  }
  submitOurClients(){
    console.log(this.our_clients.value)
  }




  /* get data from API */
  getDataFromAPI(){
    this.list=[]
    if(this.view_part=="who-us-showData"){
      this.dataServ.getWhoUsDescription().subscribe(data =>{
        this.list=data
      })
    }
  }

  /* delete data from API */
  deleteItem(item:any){
    if(this.view_part=="who-us-showData"){
      this.dataServ.deleteWhoUsDescription(item.id);
      setTimeout(() => { this.getDataFromAPI() }, 400);
    }
  }

  /* update data from API */
  updateItem(item:any){
    this.updatedObject=item;
    if(this.view_part=="who-us-showData"){
      this.view_part="who-us-description-edit" // to show form with data to edit
      this.who_us.patchValue({
        description:item.description,
      })
    }
    
  }


// ------------------------------------------ uploading Images ------------------------------------------
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

// ---------------------------------------------------------------------------------------------------




}
