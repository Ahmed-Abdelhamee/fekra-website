import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

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

  formData=new FormData()

  api_link="http://markitingwebsite-001-site1.dtempurl.com";

  who_us=this.formBuilder.group({
    description:["", Validators.required],
  })

  services=this.formBuilder.group({
    image:[{}, Validators.required],
    name:["", Validators.required],
  })

  our_team=this.formBuilder.group({
    image:["", Validators.required],
    name:["", Validators.required],
  })

  our_clients=this.formBuilder.group({
    image:[{}, Validators.required],
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
    }else if(this.view_part=="who-us-showData"){
      this.getDataFromAPI()
    }else  if(this.view_part=="our-team-showData"){
      this.getDataFromAPI()
    }else  if(this.view_part=="our-team-add"){
      this.our_team.patchValue({
        name:"",// to show form with data to edit
      })
    } else  if(this.view_part=="our-services-showData"){
      this.getDataFromAPI()
    }else  if(this.view_part=="our-services-add"){
      this.services.patchValue({
        name:"",// to show form with data to edit
      })
    }else  if(this.view_part=="our-clients-showData"){
      this.getDataFromAPI()
    }
  }


  // ------------------------- Who Us ---------------------

  submitWhoUs(){
    if(this.view_part=="who-us-add"){
      this.dataServ.createWhoUsDescription(this.who_us.value)
    }else{
      this.dataServ.updateWhoUsDescription(this.updatedObject.id,this.who_us.value)
    }
    setTimeout(() => { this.getDataFromAPI() }, 700); // to view data
    this.view_part="who-us-showData"  // to view data
  }

  // ------------------------------------------------------

  submitServices(){
    let data ={
      id:0,
      Name:this.services.get("name")?.value!
    }
    this.formData.append('data',JSON.stringify(data));
    if(this.view_part=="our-services-add"){
      this.dataServ.createWhoUsServices(this.formData).subscribe()
    }else if(this.view_part=="our-services-edit"){
      this.dataServ.updateWhoUsServices(this.updatedObject.id,this.formData)
    }
    setTimeout(() => {  this.view_part="our-services-showData"; this.getDataFromAPI() }, 700); // to view data
  }

  submitOurTeam(){
    let data ={
      id:0,
      Name:this.our_team.get("name")?.value!
    }
    this.formData.append('data',JSON.stringify(data));
    if(this.view_part=="our-team-add"){
      this.dataServ.createWhoUsTeamWorks(this.formData)
    }else if(this.view_part=="our-team-edit"){
      this.dataServ.updateWhoUsTeamWorks(this.updatedObject.id,this.formData)
    }
    setTimeout(() => {  this.view_part="our-team-showData"; this.getDataFromAPI() }, 700); // to view data
  }

  submitOurClients(){
    if(this.view_part=="our-clients-add"){
      this.dataServ.createWhoUsOurClients(this.formData)
    }else if(this.view_part=="our-clients-edit"){
      this.dataServ.updateWhoUsOurClients(this.updatedObject.id,this.formData)
    }
    setTimeout(() => {  this.view_part="our-clients-showData"; this.getDataFromAPI() }, 700); // to view data
  }


  /* get data from API */
  getDataFromAPI(){
    this.list=[]
    if(this.view_part=="who-us-showData"){
      this.dataServ.getWhoUsDescription().subscribe(data =>{
        this.list=data
      })
    }else if(this.view_part=="our-services-showData"){
      this.dataServ.getWhoUsServices().subscribe(data =>{
        this.list=data
      })
    }else if(this.view_part=="our-team-showData"){
      this.dataServ.getWhoUsTeamWorks().subscribe(data =>{
        this.list=data
      })
    }else if(this.view_part=="our-clients-showData"){
      this.dataServ.getWhoUsOurClients().subscribe(data =>{
        this.list=data
      })
    }
  }

  /* delete data from API */
  deleteItem(item:any){
    if(this.view_part=="who-us-showData"){
      this.dataServ.deleteWhoUsDescription(item.id);
    }else if(this.view_part=="our-services-showData"){
      this.dataServ.deleteWhoUsServices(item.id);
    }else if(this.view_part=="our-team-showData"){
      this.dataServ.deleteWhoUsTeamWorks(item.id);
    }else if(this.view_part=="our-clients-showData"){
      this.dataServ.deleteWhoUsOurClients(item.id);
    }
    setTimeout(() => { this.getDataFromAPI() }, 700);
  }

  /* update data from API */
  updateItem(item:any){
    this.updatedObject=item;
    if(this.view_part=="who-us-showData"){
      this.view_part="who-us-description-edit" // to show form with data to edit
      this.who_us.patchValue({
        description:item.descr// to show form with data to editiption,
      })
    }else if(this.view_part=="our-services-showData"){
      this.view_part="our-services-edit" // to show form with data to edit
      this.services.patchValue({
        name:item.name,// to show form with data to edit
      })
    }else if(this.view_part=="our-team-showData"){
      this.view_part="our-team-edit" // to show form with data to edit
      this.our_team.patchValue({
        name:item.name,// to show form with data to editiption,
      })
    }else if(this.view_part=="our-clients-showData"){
      this.view_part="our-clients-edit" // to show form with data to edit
    }
  }// to show form with data to edit


// ------------------------------------------ uploading Images ------------------------------------------
  servicesfileUpload(event:any){
    this.formData=new FormData;
    const file =event.target.files[0];
    this.formData.append('file', file);
  }

  ourTeamfileUpload(event:any){
    this.formData=new FormData;
    const file =event.target.files[0];
    this.formData.append('file', file);
  }

  clientfileUpload(event:any){
    this.formData=new FormData;
    const file =event.target.files[0];
    this.formData.append('file', file);
  }

// ---------------------------------------------------------------------------------------------------


}
