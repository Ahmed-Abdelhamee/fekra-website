import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { election } from '../admin/interfaces/election.interface';
import { advertisment } from '../admin/interfaces/advertisment.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  databaseURL:any="";

  constructor(private database:Database , private http:HttpClient) {
    this.databaseURL = database.app.options.databaseURL;
   }


// ******************************************** Advertisment Data ********************************************
   getAdvertisment():Observable<advertisment[]>{
    return this.http.get<advertisment[]>(`${this.databaseURL}/advertismentData.json`)
   }
  createAdvertisment(data:any){
    this.http.post(`${this.databaseURL}/advertismentData.json`,data).subscribe()
  }
  updateAdvertisment(key:string,data:any){
    this.http.put(`${this.databaseURL}/advertismentData/${key}.json`,data).subscribe();
  }
  deleteAdvertisment(key:string){
    this.http.delete(`${this.databaseURL}/advertismentData/${key}.json`).subscribe()
  }
// ******************************************** Election Data ********************************************
  getElection():Observable<election[]>{
    return this.http.get<election[]>(`${this.databaseURL}/ElectionImages.json`)
  }
  createElection(data:any){
    this.http.post(`${this.databaseURL}/ElectionImages.json`,data).subscribe()
  }
  updateElection(key:string,data:any){
    this.http.put(`${this.databaseURL}/ElectionImages/${key}.json`,data).subscribe();
  }
  deleteElection(key:string){
    this.http.delete(`${this.databaseURL}/ElectionImages/${key}.json`).subscribe()
}
}
