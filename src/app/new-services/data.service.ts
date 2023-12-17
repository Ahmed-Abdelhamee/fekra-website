import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { election } from '../admin/interfaces/election.interface';
import { advertisment } from '../admin/interfaces/advertisment.interface';
import { design } from '../admin/interfaces/design.interface';
import { OurClients, OurTeam, Services, WhoUs } from '../admin/interfaces/who-us.interface';
import { homeServices } from '../admin/interfaces/home.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  databaseURL:any="";

  constructor( private http:HttpClient) {
   }


   // ******************************************** HomeSerevices Data ********************************************
   getHomeSerevices():Observable<homeServices[]>{
    return this.http.get<homeServices[]>(`${environment.firebase.databaseURL}/HomeSerevicesData.json`)
   }
  createHomeSerevices(data:any){
    this.http.post(`${environment.firebase.databaseURL}/HomeSerevicesData.json`,data).subscribe()
  }
  updateHomeSerevices(key:string,data:any){
    this.http.put(`${environment.firebase.databaseURL}/HomeSerevicesData/${key}.json`,data).subscribe();
  }
  deleteHomeSerevices(key:string){
    this.http.delete(`${environment.firebase.databaseURL}/HomeSerevicesData/${key}.json`).subscribe()
  }
// ******************************************** Advertisment Data ********************************************
   getAdvertisment():Observable<advertisment[]>{
    return this.http.get<advertisment[]>(`${environment.firebase.databaseURL}/advertismentData.json`)
   }
  createAdvertisment(data:any){
    this.http.post(`${environment.firebase.databaseURL}/advertismentData.json`,data).subscribe()
  }
  updateAdvertisment(key:string,data:any){
    this.http.put(`${environment.firebase.databaseURL}/advertismentData/${key}.json`,data).subscribe();
  }
  deleteAdvertisment(key:string){
    this.http.delete(`${environment.firebase.databaseURL}/advertismentData/${key}.json`).subscribe()
  }
// ******************************************** Election Data ********************************************
  getElection():Observable<election[]>{
    return this.http.get<election[]>(`${environment.firebase.databaseURL}/ElectionImages.json`)
  }
  createElection(data:any){
    this.http.post(`${environment.firebase.databaseURL}/ElectionImages.json`,data).subscribe()
  }
  updateElection(key:string,data:any){
    this.http.put(`${environment.firebase.databaseURL}/ElectionImages/${key}.json`,data).subscribe();
  }
  deleteElection(key:string){
    this.http.delete(`${environment.firebase.databaseURL}/ElectionImages/${key}.json`).subscribe()
  }
  // ******************************************** OurWorks Data ********************************************
  getOurWorks():Observable<design[]>{
    return this.http.get<design[]>(`${environment.firebase.databaseURL}/OurWorksImages.json`)
  }
  createOurWorks(data:any){
    this.http.post(`${environment.firebase.databaseURL}/OurWorksImages.json`,data).subscribe()
  }
  updateOurWorks(key:string,data:any){
    this.http.put(`${environment.firebase.databaseURL}/OurWorksImages/${key}.json`,data).subscribe();
  }
  deleteOurWorks(key:string){
    this.http.delete(`${environment.firebase.databaseURL}/OurWorksImages/${key}.json`).subscribe()
  }
  // ******************************************** Who-Us Description ********************************************
  getWhoUsDescription():Observable<WhoUs[]>{
    return this.http.get<WhoUs[]>(`${environment.firebase.databaseURL}/WhoUsDescription.json`)
  }
  createWhoUsDescription(data:any){
    this.http.post(`${environment.firebase.databaseURL}/WhoUsDescription.json`,data).subscribe()
  }
  updateWhoUsDescription(key:string,data:any){
    this.http.put(`${environment.firebase.databaseURL}/WhoUsDescription/${key}.json`,data).subscribe();
  }
  deleteWhoUsDescription(key:string){
    this.http.delete(`${environment.firebase.databaseURL}/WhoUsDescription/${key}.json`).subscribe()
  }

// ******************************************** Who-Us Services ********************************************
getWhoUsServices():Observable<Services[]>{
  return this.http.get<Services[]>(`${environment.firebase.databaseURL}/WhoUsServices.json`)
}
createWhoUsServices(data:any){
  this.http.post(`${environment.firebase.databaseURL}/WhoUsServices.json`,data).subscribe()
}
updateWhoUsServices(key:string,data:any){
  this.http.put(`${environment.firebase.databaseURL}/WhoUsServices/${key}.json`,data).subscribe();
}
deleteWhoUsServices(key:string){
  this.http.delete(`${environment.firebase.databaseURL}/WhoUsServices/${key}.json`).subscribe()
}

// ******************************************** Who-Us TeamWorks ********************************************
getWhoUsTeamWorks():Observable<OurTeam[]>{
  return this.http.get<OurTeam[]>(`${environment.firebase.databaseURL}/WhoUsTeamWorks.json`)
}
createWhoUsTeamWorks(data:any){
  this.http.post(`${environment.firebase.databaseURL}/WhoUsTeamWorks.json`,data).subscribe()
}
updateWhoUsTeamWorks(key:string,data:any){
  this.http.put(`${environment.firebase.databaseURL}/WhoUsTeamWorks/${key}.json`,data).subscribe();
}
deleteWhoUsTeamWorks(key:string){
  this.http.delete(`${environment.firebase.databaseURL}/WhoUsTeamWorks/${key}.json`).subscribe()
}
// ******************************************** Who-Us OurClients ********************************************
getWhoUsOurClients():Observable<OurClients[]>{
  return this.http.get<OurClients[]>(`${environment.firebase.databaseURL}/WhoUsOurClients.json`)
}
createWhoUsOurClients(data:any){
  this.http.post(`${environment.firebase.databaseURL}/WhoUsOurClients.json`,data).subscribe()
}
updateWhoUsOurClients(key:string,data:any){
  this.http.put(`${environment.firebase.databaseURL}/WhoUsOurClients/${key}.json`,data).subscribe();
}
deleteWhoUsOurClients(key:string){
  this.http.delete(`${environment.firebase.databaseURL}/WhoUsOurClients/${key}.json`).subscribe()
}

}
