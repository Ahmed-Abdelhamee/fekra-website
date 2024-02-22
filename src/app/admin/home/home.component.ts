import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Validators, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/new-services/data.service';
import { Database } from '@angular/fire/database';
import { homeServices } from '../interfaces/home.interface';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  databaseURL: any = environment.firebase.databaseURL;
  // for control the view 
  controlItem: string = "showData";
  uploadingImg: string = "";
  // variables for getting the data 
  photoUrl: any = "";
  homeServicesList: homeServices[] = []
  // for add the image
  homeSerevices = this.formBuilder.group({
    image: ["", Validators.required],
    title: ["", Validators.required],
    text: ["", Validators.required],
    id: [new Date().getTime()]
  })
  // for update the image 
  updateObject: homeServices = {} as homeServices

  constructor(private formBuilder: FormBuilder, private dataServ: DataService, private http: HttpClient,
    private firestorage: AngularFireStorage, private toastr: ToastrService) {
    this.getData()
  }

  ngOnInit(): void {
  }

  // ----------------------- to control the show   with API  -----------------------
  restData(data: string) {
    this.controlItem = data;
    this.homeServicesList = [];
    this.homeSerevices.patchValue({
      id: new Date().getTime(),
      image: "",
      text: "",
      title: "",
    })
    this.updateObject = {} as homeServices;
    this.controlItem = "";
    this.uploadingImg = "";

  }

  // -----------  for uploading image on firebase  ----------
  async uploadImg(event: any) {
    this.uploadingImg = "uploadingImg";
    const file = event.target.files[0];
    if (file) {
      const path = `fekra/${new Date().getTime()}${file.name}`; // we make name of file in firebase storage 
      const uploadTask = await this.firestorage.upload(path, file)
      const url = await uploadTask.ref.getDownloadURL()
      this.photoUrl = url;
    }
    this.uploadingImg = "imgUploaded";
    this.homeSerevices.patchValue({
      image: this.photoUrl
    })
  }

  // -------------------- get data for firebase  --------------------
  getData() {
    let List: homeServices[] = [];
    this.homeServicesList = []
    this.dataServ.getHomeSerevices().subscribe(data => {
      for (const key in data) {
        List.push(data[key]);
      }
      this.homeServicesList = List;
      this.controlItem = "showData"
    })
  }

  // -------------- sending data to function() ----------------
  submit() {
    if (this.controlItem == "add") {
      this.dataServ.createHomeSerevices(this.homeSerevices.value)
    } else {
      this.dataServ.getHomeSerevices().subscribe(async data => {
        for (const key in data) {
          if (data[key].id == this.updateObject.id) {
            if(this.updateObject.image != this.photoUrl)
            this.firestorage.storage.refFromURL(data[key].image!).delete()
            this.dataServ.updateHomeSerevices(key, this.homeSerevices.value)
          }
        }
      })
    }
  }

  // ----------------- to update data -------------------
  editItem(item: homeServices) {
    this.updateObject = item;
    this.photoUrl=item.image;
    this.homeSerevices.patchValue({
      id: item.id,
      image: item.image,
      text: item.text,
      title: item.title,
    })
  }

  // ----------------- for deleting item -----------------
  deleteItem(id: number) {
    this.dataServ.getHomeSerevices().subscribe(data => {
      for (const key in data) {
        if (data[key].id == id) {
          this.http.delete(`${this.databaseURL}/HomeSerevicesData/${key}.json`).subscribe(() => {
            this.firestorage.storage.refFromURL(data[key].image!).delete().finally(() => {
              location.reload()
            })
          })
        }
      }
    })
  }

}
