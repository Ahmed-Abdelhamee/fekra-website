import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { advertisment } from '../admin/interfaces/advertisment.interface';
import { election } from '../admin/interfaces/election.interface';
import { OurClients, OurTeam, Services, WhoUs } from '../admin/interfaces/who-us.interface';
import { design } from '../admin/interfaces/design.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { }

  Api_link:string="http://markitingwebsite-001-site1.dtempurl.com";

  /* ---------------------------------------- Advertisments API--------------------------------------- */
  getAdvertisments():Observable<advertisment[]>{
    return this.http.get<advertisment[]>(`${this.Api_link}/api/Advertising/GetAllAdvertisng`);
  }
  createAdvertisments(data:any){
     this.http.post(`${this.Api_link}/api/Advertising/AddAdvertising`,data).subscribe();
  }
  deleteAdvertisments(id:number){
    this.http.delete(`${this.Api_link}/api/Advertising/DeleteAdvertising?id=${id}`).subscribe();
  }
  updateAdvertisments(id:number,data:any){
    this.http.put(`${this.Api_link}/api/Advertising/updateAdvertising?id=${id}` , data).subscribe();
  }
  /* ------------------------------------------------------------------------------------------------------- */

  /* ------------------------------------------- Election API ---------------------------------------------- */
  getElection():Observable<election[]>{
    return this.http.get<election[]>(`${this.Api_link}/api/Election/GetAllelection`);
  }
  createElection(data:any){
     return this.http.post(`${this.Api_link}/api/Election/Addelection`,data);
  }
  deleteElection(id:number){
    this.http.delete(`${this.Api_link}/api/Election/Deleteelection?id=${id}`).subscribe();
 }
  updateElection(id:number,data:any){
    return this.http.put(`${this.Api_link}/api/Election/updateElection?id=${id}` , data)
  }
  /* ------------------------------------------------------------------------------------------------------- */

  /* ------------------------------------------- our-works in web-desgin API ---------------------------------------------- */
  getOurWorks():Observable<design[]>{
    return this.http.get<design[]>(`${this.Api_link}/api/Ourworks/GetAllworks`);
  }
  createOurWorks(data:any){
     return this.http.post(`${this.Api_link}/api/Ourworks/AddWork`, data)
  }
  deleteOurWorks(id:number){
    console.log(id)
    this.http.delete(`${this.Api_link}/api/Ourworks/Deleteworker?id=${id}`).subscribe();
 }
  updateOurWorks(id:number,data:any){
    return this.http.put(`${this.Api_link}/api/Ourworks/updatework?id=${id}` , data)
  }
  /* ------------------------------------------------------------------------------------------------------- */

  /* ------------------------------------------- Services in who-us API ---------------------------------------------- */
  getWhoUsServices():Observable<Services[]>{
    return this.http.get<Services[]>(`${this.Api_link}/api/Services/GetAllservices`);
  }
  createWhoUsServices(data:any): Observable<any>{
     return this.http.post(`${this.Api_link}/api/Services/Addservices`,data);
  }
  deleteWhoUsServices(id:number){
    this.http.delete(`${this.Api_link}/api/Services/Deleteservices?id=${id}`).subscribe();
 }
  updateWhoUsServices(id:number,data:any){
    this.http.put(`${this.Api_link}/api/Services/updateservices?id=${id}` , data).subscribe();
  }
  /* ------------------------------------------------------------------------------------------------------- */


    /* ------------------------------------------- Team members in who-us API ---------------------------------------------- */
    getWhoUsTeamWorks():Observable<OurTeam[]>{
      return this.http.get<OurTeam[]>(`${this.Api_link}/api/Teamworks/GetAllTeam`);
    }
    createWhoUsTeamWorks(data:any){
       this.http.post(`${this.Api_link}/api/Teamworks/AddFactor`,data).subscribe();
    }
    deleteWhoUsTeamWorks(id:number){
      this.http.delete(`${this.Api_link}/api/Teamworks/DeleteTeammember?id=${id}`).subscribe();
   }
    updateWhoUsTeamWorks(id:number,data:any){
      this.http.put(`${this.Api_link}/api/Teamworks/updateteam?id=${id}` , data).subscribe();
    }
    /* ------------------------------------------------------------------------------------------------------- */


    /* ------------------------------------------- Description in Who-us API ---------------------------------------------- */
    getWhoUsDescription():Observable<WhoUs[]>{
      return this.http.get<WhoUs[]>(`${this.Api_link}/api/Whous/GetAllDescription`);
    }
    createWhoUsDescription(data:any){
       this.http.post(`${this.Api_link}/api/Whous/AddDescription`,data).subscribe();
    }
    deleteWhoUsDescription(id:number){
      this.http.delete(`${this.Api_link}/api/Whous/DeleteDescription?id=${id}`).subscribe();
   }
    updateWhoUsDescription(id:number,data:any){
      this.http.put(`${this.Api_link}/api/Whous/updateDescription?id=${id}` , data).subscribe();
    }
    /* ------------------------------------------------------------------------------------------------------- */

    /* ------------------------------------------- our-clients in Who-us API ---------------------------------------------- */
    getWhoUsOurClients():Observable<OurClients[]>{
      return this.http.get<OurClients[]>(`${this.Api_link}/api/Customres/GetAllCustomer`);
    }
    createWhoUsOurClients(data:any){
       this.http.post(`${this.Api_link}/api/Customres/Addcustomer`,data).subscribe();
    }
    deleteWhoUsOurClients(id:number){
      this.http.delete(`${this.Api_link}/api/Customres/DeleteCustomer?id=${id}`).subscribe();
   }
    updateWhoUsOurClients(id:number,data:any){
      this.http.put(`${this.Api_link}/api/Customres/updateCustomer?id=${id}` , data).subscribe();
    }
    /* ------------------------------------------------------------------------------------------------------- */

}
