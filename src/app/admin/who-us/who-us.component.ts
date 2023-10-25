import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/new-services/data.service';

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

  uploadingImg:string="";
  photoUrl:string="";

  who_us=this.formBuilder.group({
    description:["", Validators.required],
    id:[new Date().getTime()]
  })

  services=this.formBuilder.group({
    image:[{}, Validators.required],
    description:["", Validators.required],
    id:[new Date().getTime()]
  })

  our_team=this.formBuilder.group({
    image:["", Validators.required],
    name:["", Validators.required],
    id:[new Date().getTime()]
  })

  our_clients=this.formBuilder.group({
    image:[{}, Validators.required],
    id:[new Date().getTime()]
  })



  constructor( private formBuilder:FormBuilder , private route : Router , private dataServ:DataService,private firestorage:AngularFireStorage) { 
    this.showpart('who-us-showData')
  }

  ngOnInit(): void {  }


  showpart(part:string){
    this.view_part=part;
    this.servicesPhotoUrl=""
    this.teamPhotoUrl=""
    this.clientPhotoUrl=""
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
        description:"",// to show form with data to edit
      })
    }else  if(this.view_part=="our-clients-showData"){
      this.getDataFromAPI()
    }
  }

  // -------------------------------------------------- Upload file data  ----------------------------------------------

  async servicesfileUpload(event:any){
    this.uploadingImg="uploadingImg";
    const file=event.target.files[0];
    if(file){
      const path=`fekra/${file.name}${new Date().getTime()}`; // we make name of file in firebase storage 
      const uploadTask = await this.firestorage.upload(path,file)
      const url =await uploadTask.ref.getDownloadURL()
      this.servicesPhotoUrl=url;
    }
    this.uploadingImg="imgUploaded";
    this.services.patchValue({
      image:this.servicesPhotoUrl
    })
  }

  async ourTeamfileUpload(event:any){
    this.uploadingImg="uploadingImg";
    const file=event.target.files[0];
    if(file){
      const path=`fekra/${file.name}${new Date().getTime()}`; // we make name of file in firebase storage 
      const uploadTask = await this.firestorage.upload(path,file)
      const url =await uploadTask.ref.getDownloadURL()
      this.teamPhotoUrl=url;
    }
    this.uploadingImg="imgUploaded";
    this.our_team.patchValue({
      image:this.teamPhotoUrl
    })
  }

  async clientfileUpload(event:any){
    this.uploadingImg="uploadingImg";
    const file=event.target.files[0];
    if(file){
      const path=`fekra/${file.name}${new Date().getTime()}`; // we make name of file in firebase storage 
      const uploadTask = await this.firestorage.upload(path,file)
      const url =await uploadTask.ref.getDownloadURL()
      this.clientPhotoUrl=url;
    }
    this.uploadingImg="imgUploaded";
    this.our_clients.patchValue({
      image:this.clientPhotoUrl
    })
  }


  // -------------------------------------------------- submit forms data  ----------------------------------------------

  // send Who Us data
  submitWhoUs(){
    if(this.view_part=="who-us-add"){
      this.who_us.patchValue({
        id:new Date().getTime() // to make a new id
      })
      this.dataServ.createWhoUsDescription(this.who_us.value)
    }else{
      this.dataServ.getWhoUsDescription().subscribe(data =>{
        // to get the object to update
        for (const key in data) {
          if(data[key].id == this.updatedObject.id)
          this.dataServ.updateWhoUsDescription(key,this.who_us.value)
        }
      })
    }
    setTimeout(() => { this.getDataFromAPI() ;}, 700); // to view data
    setTimeout(() => { this.view_part="who-us-showData"  /* to view data */}, 650); // to view data
  }

  // send Servics data
  submitServices(){
    if(this.view_part=="our-services-add"){
      this.services.patchValue({
        id:new Date().getTime() // to make a new id
      })
      this.dataServ.createWhoUsServices(this.services.value)
    }else if(this.view_part=="our-services-edit"){
      // to get the object to update
      this.dataServ.getWhoUsServices().subscribe(data =>{
        for (const key in data) {
          if(data[key].id == this.updatedObject.id)
          this.dataServ.updateWhoUsServices(key,this.services.value)
        }
      })
    }
    setTimeout(() => { this.getDataFromAPI() }, 700); // to view data
    this.view_part="our-services-showData"; 
  }

  // send Our Team data
  submitOurTeam(){
    if(this.view_part=="our-team-add"){
      this.our_team.patchValue({
        id:new Date().getTime()   // to make a new id
      })
    this.dataServ.createWhoUsTeamWorks(this.our_team.value)
    // to get the object to update
    }else if(this.view_part=="our-team-edit"){
      // to get the object to update
      this.dataServ.getWhoUsTeamWorks().subscribe(data =>{
        for (const key in data) {
          if(data[key].id == this.updatedObject.id)
          this.dataServ.updateWhoUsTeamWorks(key,this.our_team.value)
        }
      })
    }
    setTimeout(() => { this.getDataFromAPI() }, 700); // to view data
    this.view_part="our-team-showData";  // to view data
  }

  // send Our Clients data
  submitOurClients(){
    if(this.view_part=="our-clients-add"){
      this.our_clients.patchValue({
        id:new Date().getTime()   // to make a new id
      })
    this.dataServ.createWhoUsOurClients(this.our_clients.value)
    // to get the object to update
    }else if(this.view_part=="our-clients-edit"){
      // to get the object to update
      this.dataServ.getWhoUsOurClients().subscribe(data =>{
        for (const key in data) {
          if(data[key].id == this.updatedObject.id)
          this.dataServ.updateWhoUsOurClients(key,this.our_clients.value)
        }
      })
    }
    setTimeout(() => { this.getDataFromAPI() }, 700); // to view data
    this.view_part="our-clients-showData"; // to view data
  }


  /* ------------------------- get data from API ------------------------- */

  getDataFromAPI(){
    this.list=[]
    if(this.view_part=="who-us-showData"){
      this.dataServ.getWhoUsDescription().subscribe(data =>{
        for (const key in data) {
          this.list.push(data[key])
        }
      })
    }else if(this.view_part=="our-services-showData"){
      this.dataServ.getWhoUsServices().subscribe(data =>{
        for (const key in data) {
          this.list.push(data[key])
        }
      })
    }else if(this.view_part=="our-team-showData"){
      this.dataServ.getWhoUsTeamWorks().subscribe(data =>{
        for (const key in data) {
          this.list.push(data[key])
        }
      })
    }else if(this.view_part=="our-clients-showData"){
      this.dataServ.getWhoUsOurClients().subscribe(data =>{
        for (const key in data) {
          this.list.push(data[key])
        }
      })
    }
  }
  
  
  /* ------------------------- update data from API ------------------------- */
  updateItem(item:any){
    this.updatedObject=item;
    if(this.view_part=="who-us-showData"){
      this.view_part="who-us-description-edit" // to show form with data to edit
      this.who_us.patchValue({
        description:item.description,// to show form with data to editiption,
        id:item.id // to set the id as it is 
      })
    }else if(this.view_part=="our-services-showData"){
      this.view_part="our-services-edit" // to show form with data to edit
      this.services.patchValue({
        description:item.description,// to show form with data to edit
        id:this.updatedObject.id // to set the id as it is 
      })
      this.servicesPhotoUrl=""
    }else if(this.view_part=="our-team-showData"){
      this.view_part="our-team-edit" // to show form with data to edit
      this.our_team.patchValue({
        name:item.name,// to show form with data to editiption,
        id:this.updatedObject.id   // to set the id as it is 
      })
      this.teamPhotoUrl=""
    }else if(this.view_part=="our-clients-showData"){
      this.view_part="our-clients-edit" // to show form with data to edit
      this.clientPhotoUrl="";
      this.services.patchValue({
        id:this.updatedObject.id   // to set the id as it is 
      })
    }
  }


  /* ------------------------- delete data from API ------------------------- */

  deleteItem(item:any){
    if(this.view_part=="who-us-showData"){
      this.dataServ.getWhoUsDescription().subscribe(data =>{
        for (const key in data) {
          if(item.id == data[key].id)
            this.dataServ.deleteWhoUsDescription(key);
        }
      })
    }else if(this.view_part=="our-services-showData"){
      this.dataServ.getWhoUsServices().subscribe(data =>{
        for (const key in data) {
          if(item.id == data[key].id)
            this.dataServ.deleteWhoUsServices(key);
        }
      })
    }else if(this.view_part=="our-team-showData"){
      this.dataServ.getWhoUsTeamWorks().subscribe(data =>{
        for (const key in data) {
          if(item.id == data[key].id)
            this.dataServ.deleteWhoUsTeamWorks(key);
        }
      })
    }else if(this.view_part=="our-clients-showData"){
      this.dataServ.getWhoUsOurClients().subscribe(data =>{
        for (const key in data) {
          if(item.id == data[key].id)
            this.dataServ.deleteWhoUsOurClients(key);
        }
      })
    }
    setTimeout(() => { this.getDataFromAPI() }, 700);
  }

}


















// ------------------------- Submit Data using Asp.net-----------------------------

// formData=new FormData()
// api_link="http://markitingwebsite-001-site1.dtempurl.com";

// submitServices(){
//   let data ={
//     id:0,
//     Name:this.services.get("name")?.value!
//   }
//   this.formData.append('data',JSON.stringify(data));
//   if(this.view_part=="our-services-add"){
//     this.dataServ.createWhoUsServices(this.formData)
//   }else if(this.view_part=="our-services-edit"){
//     this.dataServ.updateWhoUsServices(this.updatedObject.id,this.formData)
//   }
//   setTimeout(() => {  this.view_part="our-services-showData"; this.getDataFromAPI() }, 700); // to view data
// }
// submitOurTeam(){
//   let data ={
//     id:0,
//     Name:this.our_team.get("name")?.value!
//   }
//   this.formData.append('data',JSON.stringify(data));
//   if(this.view_part=="our-team-add"){
//     this.dataServ.createWhoUsTeamWorks(this.formData)
//   }else if(this.view_part=="our-team-edit"){
//     this.dataServ.updateWhoUsTeamWorks(this.updatedObject.id,this.formData)
//   }
//   setTimeout(() => {  this.view_part="our-team-showData"; this.getDataFromAPI() }, 700); // to view data
// }

// submitOurClients(){
//   if(this.view_part=="our-clients-add"){
//     this.dataServ.createWhoUsOurClients(this.formData)
//   }else if(this.view_part=="our-clients-edit"){
//     this.dataServ.updateWhoUsOurClients(this.updatedObject.id,this.formData)
//   }
//   setTimeout(() => {  this.view_part="our-clients-showData"; this.getDataFromAPI() }, 700); // to view data
// }

// ------------------------------------------ uploading Images ------------------------------------------
// servicesfileUpload(event:any){
//   this.formData=new FormData;
//   const file =event.target.files[0];
//   this.formData.append('file', file);
// }

// ourTeamfileUpload(event:any){
//   this.formData=new FormData;
//   const file =event.target.files[0];
//   this.formData.append('file', file);
// }

// clientfileUpload(event:any){
//   this.formData=new FormData;
//   const file =event.target.files[0];
//   this.formData.append('file', file);
// }

// ---------------------------------------------------------------------------------------------------