import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/new-services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-who-us',
  templateUrl: './who-us.component.html',
  styleUrls: ['./who-us.component.scss']
})
export class WhoUsComponent implements OnInit {

  databaseURL: any = environment.firebase.databaseURL;

  view_part: string = "";
  updatedObject: any;
  // data variables 
  list: any[] = [];
  servicesPhotoUrl: any = ""
  teamPhotoUrl: any = ""
  clientPhotoUrl: any = ""

  uploadingImg: string = "";
  photoUrl: string = "";

  who_us = this.formBuilder.group({
    description: ["", Validators.required],
    id: [new Date().getTime()]
  })

  services = this.formBuilder.group({
    image: [{}, Validators.required],
    description: ["", Validators.required],
    id: [new Date().getTime()]
  })

  our_team = this.formBuilder.group({
    image: ["", Validators.required],
    name: ["", Validators.required],
    id: [new Date().getTime()]
  })

  our_clients = this.formBuilder.group({
    image: [{}, Validators.required],
    id: [new Date().getTime()]
  })

  constructor(private formBuilder: FormBuilder, private route: Router, private http: HttpClient,
    private dataServ: DataService, private firestorage: AngularFireStorage, private toastr: ToastrService) {
    this.showpart('who-us-showData')
  }

  ngOnInit(): void { }

  /* ------------------------- get data from API ------------------------- */

  getDataFromAPI() {
    this.list = []
    if (this.view_part == "who-us-showData") {
      this.dataServ.getWhoUsDescription().subscribe(data => {
        for (const key in data) {
          this.list.push(data[key])
        }
      })
    } else if (this.view_part == "our-services-showData") {
      this.dataServ.getWhoUsServices().subscribe(data => {
        for (const key in data) {
          this.list.push(data[key])
        }
      })
    } else if (this.view_part == "our-team-showData") {
      this.dataServ.getWhoUsTeamWorks().subscribe(data => {
        for (const key in data) {
          this.list.push(data[key])
        }
      })
    } else if (this.view_part == "our-clients-showData") {
      this.dataServ.getWhoUsOurClients().subscribe(data => {
        for (const key in data) {
          this.list.push(data[key])
        }
      })
    }
  }


  showpart(part: string) {
    this.view_part = part;
    this.servicesPhotoUrl = ""
    this.teamPhotoUrl = ""
    this.clientPhotoUrl = ""
    this.updatedObject = {}
    this.list = []
    if (this.view_part == "who-us-add") {
      this.who_us.patchValue({
        description: "",
        id: new Date().getTime()
      })
    } else if (this.view_part == "our-team-add") {
      this.our_team.patchValue({
        image: "",
        name: "",// to show form with data to edit
        id: new Date().getTime()
      })
    } else if (this.view_part == "our-services-add") {
      this.services.patchValue({
        image: "",
        description: "",// to show form with data to edit
        id: new Date().getTime()
      })
    } else if (this.view_part == "our-clients-add") {
      this.our_clients.patchValue({
        image: "",
        id: new Date().getTime()
      })
    } else {
      this.getDataFromAPI()
    }
  }


  // -------------------------------------------------- Upload file data  ----------------------------------------------

  async servicesfileUpload(event: any) {
    this.uploadingImg = "uploadingImg";
    const file = event.target.files[0];
    if (file) {
      const path = `fekra/${new Date().getTime()}${file.name}`; // we make name of file in firebase storage 
      const uploadTask = await this.firestorage.upload(path, file)
      const url = await uploadTask.ref.getDownloadURL()
      this.servicesPhotoUrl = url;
    }
    this.uploadingImg = "imgUploaded";
    this.services.patchValue({
      image: this.servicesPhotoUrl
    })
  }

  async ourTeamfileUpload(event: any) {
    this.uploadingImg = "uploadingImg";
    const file = event.target.files[0];
    if (file) {
      const path = `fekra/${new Date().getTime()}${file.name}`; // we make name of file in firebase storage 
      const uploadTask = await this.firestorage.upload(path, file)
      const url = await uploadTask.ref.getDownloadURL()
      this.teamPhotoUrl = url;
    }
    this.uploadingImg = "imgUploaded";
    this.our_team.patchValue({
      image: this.teamPhotoUrl
    })
  }

  async clientfileUpload(event: any) {
    this.uploadingImg = "uploadingImg";
    const file = event.target.files[0];
    if (file) {
      const path = `fekra/${new Date().getTime()}${file.name}`; // we make name of file in firebase storage 
      const uploadTask = await this.firestorage.upload(path, file)
      const url = await uploadTask.ref.getDownloadURL()
      this.clientPhotoUrl = url;
    }
    this.uploadingImg = "imgUploaded";
    this.our_clients.patchValue({
      image: this.clientPhotoUrl
    })
  }


  // -------------------------------------------------- submit forms data  ----------------------------------------------

  // send Who Us data
  async submitWhoUs() {
    if (this.view_part == "who-us-add") {
      this.who_us.patchValue({
        id: new Date().getTime() // to make a new id
      })
      await this.dataServ.createWhoUsDescription(this.who_us.value)
      this.showpart("who-us-add")
    } else {
      this.dataServ.getWhoUsDescription().subscribe(async data => {
        // to get the object to update
        for (const key in data) {
          if (data[key].id == this.updatedObject.id)
            await this.dataServ.updateWhoUsDescription(key, this.who_us.value)
          this.showpart("who-us-add")
        }
      })
    }
    // setTimeout(() => { this.getDataFromAPI(); }, 700); // to view data
    // setTimeout(() => { this.view_part = "who-us-showData"  /* to view data */ }, 650); // to view data
  }

  // send Servics data
  async submitServices() {
    if (this.view_part == "our-services-add") {
      this.services.patchValue({
        id: new Date().getTime() // to make a new id
      })
      await this.dataServ.createWhoUsServices(this.services.value)
      this.showpart("our-services-add")
    } else if (this.view_part == "our-services-edit") {
      // to get the object to update
      this.dataServ.getWhoUsServices().subscribe(async data => {
        for (const key in data) {
          if (data[key].id == this.updatedObject.id) {
            await this.dataServ.updateWhoUsServices(key, this.services.value)
            if (this.servicesPhotoUrl != this.updatedObject.image) {
              this.firestorage.storage.refFromURL(data[key].image).delete()
            }
            this.showpart("our-services-add")
          }
        }
      })
    }
  }

  // send Our Team data
  async submitOurTeam() {
    if (this.view_part == "our-team-add") {
      this.our_team.patchValue({
        id: new Date().getTime()   // to make a new id
      })
      await this.dataServ.createWhoUsTeamWorks(this.our_team.value)
      this.showpart("our-team-add")
      // to get the object to update
    } else if (this.view_part == "our-team-edit") {
      // to get the object to update
      this.dataServ.getWhoUsTeamWorks().subscribe(async data => {
        for (const key in data) {
          if (data[key].id == this.updatedObject.id) {
            await this.dataServ.updateWhoUsTeamWorks(key, this.our_team.value);
            if (this.teamPhotoUrl != this.updatedObject.image) {
              this.firestorage.storage.refFromURL(data[key].image).delete()
            }
            this.showpart("our-team-add")
          }
        }
      })
    }
  }

  // send Our Clients data
  async submitOurClients() {
    if (this.view_part == "our-clients-add") {
      this.our_clients.patchValue({
        id: new Date().getTime()   // to make a new id
      })
      await this.dataServ.createWhoUsOurClients(this.our_clients.value)
      // to get the object to update
      this.showpart("our-clients-add")
    } else if (this.view_part == "our-clients-edit") {
      // to get the object to update
      this.dataServ.getWhoUsOurClients().subscribe(async data => {
        for (const key in data) {
          if (data[key].id == this.updatedObject.id) {
            await this.dataServ.updateWhoUsOurClients(key, this.our_clients.value)
            if (this.clientPhotoUrl != this.updatedObject.image)
              this.firestorage.storage.refFromURL(data[key].image).delete()
            this.showpart("our-clients-add")
          }
        }
      })
    }
  }


  /* ------------------------- update data from API ------------------------- */
  updateItem(item: any) {
    this.updatedObject = item;
    if (this.view_part == "who-us-showData") {
      this.view_part = "who-us-description-edit" // to show form with data to edit
      this.who_us.patchValue({
        description: item.description,// to show form with data to editiption,
        id: item.id // to set the id as it is 
      })
    } else if (this.view_part == "our-services-showData") {
      this.view_part = "our-services-edit" // to show form with data to edit
      this.services.patchValue({
        image: item.image,
        description: item.description,// to show form with data to edit
        id: this.updatedObject.id // to set the id as it is 
      })
      this.servicesPhotoUrl = item.image
    } else if (this.view_part == "our-team-showData") {
      this.view_part = "our-team-edit" // to show form with data to edit
      this.our_team.patchValue({
        image: item.image,
        name: item.name,// to show form with data to editiption,
        id: this.updatedObject.id   // to set the id as it is 
      })
      this.teamPhotoUrl = item.image
    } else if (this.view_part == "our-clients-showData") {
      this.view_part = "our-clients-edit" // to show form with data to edit
      this.clientPhotoUrl = "";
      this.our_clients.patchValue({
        id: this.updatedObject.id,  // to set the id as it is 
        image: item.image
      })
      this.clientPhotoUrl = item.image;
    }
  }


  /* ------------------------- delete data from API ------------------------- */

  deleteItem(item: any) {
    if (this.view_part == "who-us-showData") {
      this.dataServ.getWhoUsDescription().subscribe(data => {
        for (const key in data) {
          if (item.id == data[key].id)
            this.http.delete(`${this.databaseURL}/WhoUsDescription/${key}.json`).subscribe(() => {
              this.list = []
              this.getDataFromAPI()
            })
        }
      })
    } else if (this.view_part == "our-services-showData") {
      this.dataServ.getWhoUsServices().subscribe(data => {
        for (const key in data) {
          if (item.id == data[key].id) {
            this.firestorage.storage.refFromURL(data[key].image).delete()
            this.http.delete(`${this.databaseURL}/WhoUsServices/${key}.json`).subscribe(() => {
              this.list = []
              this.getDataFromAPI()
            })
          }
        }
      })
    } else if (this.view_part == "our-team-showData") {
      this.dataServ.getWhoUsTeamWorks().subscribe(data => {
        for (const key in data) {
          if (item.id == data[key].id) {
            this.http.delete(`${this.databaseURL}/WhoUsTeamWorks/${key}.json`).subscribe(() => {
              this.list = []
              this.getDataFromAPI()
            })
            this.firestorage.storage.refFromURL(data[key].image).delete()
          }
        }
      })
    } else if (this.view_part == "our-clients-showData") {
      this.dataServ.getWhoUsOurClients().subscribe(data => {
        for (const key in data) {
          if (item.id == data[key].id) {
            this.http.delete(`${this.databaseURL}/WhoUsOurClients/${key}.json`).subscribe(() => {
              this.list = []
              this.getDataFromAPI()
            })
            this.firestorage.storage.refFromURL(data[key].image).delete()
          }
        }
      })
    }
    this.toastr.success("تم حذف المحتوي")
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