import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { election } from '../admin/interfaces/election.interface';
import { advertisment } from '../admin/interfaces/advertisment.interface';
import { design } from '../admin/interfaces/design.interface';
import { OurClients, OurTeam, Services, WhoUs } from '../admin/interfaces/who-us.interface';

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
  // ******************************************** OurWorks Data ********************************************
  getOurWorks():Observable<design[]>{
    return this.http.get<design[]>(`${this.databaseURL}/OurWorksImages.json`)
  }
  createOurWorks(data:any){
    this.http.post(`${this.databaseURL}/OurWorksImages.json`,data).subscribe()
  }
  updateOurWorks(key:string,data:any){
    this.http.put(`${this.databaseURL}/OurWorksImages/${key}.json`,data).subscribe();
  }
  deleteOurWorks(key:string){
    this.http.delete(`${this.databaseURL}/OurWorksImages/${key}.json`).subscribe()
  }
  // ******************************************** Who-Us Description ********************************************
  getWhoUsDescription():Observable<WhoUs[]>{
    return this.http.get<WhoUs[]>(`${this.databaseURL}/WhoUsDescription.json`)
  }
  createWhoUsDescription(data:any){
    this.http.post(`${this.databaseURL}/WhoUsDescription.json`,data).subscribe()
  }
  updateWhoUsDescription(key:string,data:any){
    this.http.put(`${this.databaseURL}/WhoUsDescription/${key}.json`,data).subscribe();
  }
  deleteWhoUsDescription(key:string){
    this.http.delete(`${this.databaseURL}/WhoUsDescription/${key}.json`).subscribe()
  }

// ******************************************** Who-Us Services ********************************************
getWhoUsServices():Observable<Services[]>{
  return this.http.get<Services[]>(`${this.databaseURL}/WhoUsServices.json`)
}
createWhoUsServices(data:any){
  this.http.post(`${this.databaseURL}/WhoUsServices.json`,data).subscribe()
}
updateWhoUsServices(key:string,data:any){
  this.http.put(`${this.databaseURL}/WhoUsServices/${key}.json`,data).subscribe();
}
deleteWhoUsServices(key:string){
  this.http.delete(`${this.databaseURL}/WhoUsServices/${key}.json`).subscribe()
}

// ******************************************** Who-Us TeamWorks ********************************************
getWhoUsTeamWorks():Observable<OurTeam[]>{
  return this.http.get<OurTeam[]>(`${this.databaseURL}/WhoUsTeamWorks.json`)
}
createWhoUsTeamWorks(data:any){
  this.http.post(`${this.databaseURL}/WhoUsTeamWorks.json`,data).subscribe()
}
updateWhoUsTeamWorks(key:string,data:any){
  this.http.put(`${this.databaseURL}/WhoUsTeamWorks/${key}.json`,data).subscribe();
}
deleteWhoUsTeamWorks(key:string){
  this.http.delete(`${this.databaseURL}/WhoUsTeamWorks/${key}.json`).subscribe()
}
// ******************************************** Who-Us OurClients ********************************************
getWhoUsOurClients():Observable<OurClients[]>{
  return this.http.get<OurClients[]>(`${this.databaseURL}/WhoUsOurClients.json`)
}
createWhoUsOurClients(data:any){
  this.http.post(`${this.databaseURL}/WhoUsOurClients.json`,data).subscribe()
}
updateWhoUsOurClients(key:string,data:any){
  this.http.put(`${this.databaseURL}/WhoUsOurClients/${key}.json`,data).subscribe();
}
deleteWhoUsOurClients(key:string){
  this.http.delete(`${this.databaseURL}/WhoUsOurClients/${key}.json`).subscribe()
}

}
