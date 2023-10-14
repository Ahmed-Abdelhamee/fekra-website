import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { advertisment } from '../admin/interfaces/advertisment.interface';
import { election } from '../admin/interfaces/election.interface';
import { OurTeam, Services, WhoUs } from '../admin/interfaces/who-us.interface';
import { design } from '../admin/interfaces/design.interface';
import { Api_link } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { }

  /* ---------------------------------------- Advertisments API--------------------------------------- */
  getAdvertisments():Observable<advertisment[]>{
    return this.http.get<advertisment[]>(`${Api_link}/Advertising/GetAllAdvertisng`);
  }
  createAdvertisments(data:any){
     this.http.post(`${Api_link}/Advertising/AddAdvertising`,data).subscribe();
  }
  deleteAdvertisments(id:number){
    this.http.delete(`${Api_link}/Advertising/DeleteAdvertising?id=${id}`).subscribe();
  }
  updateAdvertisments(id:number,data:any){
    this.http.put(`${Api_link}/Advertising/updateAdvertising?id=${id}` , data).subscribe();
  }
  /* ------------------------------------------------------------------------------------------------------- */

  /* ------------------------------------------- Election API ---------------------------------------------- */
  getElection():Observable<election[]>{
    return this.http.get<election[]>(`${Api_link}/Election/GetAllelection`);
  }
  createElection(data:any){
     this.http.post(`${Api_link}/Election/Addelection`,data).subscribe();
  }
  deleteElection(id:number){
    this.http.delete(`${Api_link}/Election/Deleteelection?id=${id}`).subscribe();
 }
  updateElection(id:number,data:any){
    this.http.put(`${Api_link}/Election/updateElection?id=${id}` , data).subscribe();
  }
  /* ------------------------------------------------------------------------------------------------------- */

  /* ------------------------------------------- our-works in web-desgin API ---------------------------------------------- */
  getOurWorks():Observable<design[]>{
    return this.http.get<design[]>(`${Api_link}/Ourworks/GetAllworks`);
  }
  createOurWorks(data:any){
     this.http.post(`${Api_link}/Ourworks/AddWork`,data).subscribe();
  }
  deleteOurWorks(id:number){
    this.http.delete(`${Api_link}/Ourworks/ Deleteworker?id=${id}`).subscribe();
 }
  updateOurWorks(id:number,data:any){
    this.http.put(`${Api_link}/Ourworks/updatework?id=${id}` , data).subscribe();
  }
  /* ------------------------------------------------------------------------------------------------------- */

  /* ------------------------------------------- Services in who-us API ---------------------------------------------- */
  getWhoUsServices():Observable<Services[]>{
    return this.http.get<Services[]>(`${Api_link}/Services/GetAllservices`);
  }
  createWhoUsServices(data:any){
     this.http.post(`${Api_link}/Services/Addservices`,data).subscribe();
  }
  deleteWhoUsServices(id:number){
    this.http.delete(`${Api_link}/Services/Deleteservices?id=${id}`).subscribe();
 }
  updateWhoUsServices(id:number,data:any){
    this.http.put(`${Api_link}/Services/updateservices?id=${id}` , data).subscribe();
  }
  /* ------------------------------------------------------------------------------------------------------- */


    /* ------------------------------------------- Team members in who-us API ---------------------------------------------- */
    getWhoUsTeamWorks():Observable<OurTeam[]>{
      return this.http.get<OurTeam[]>(`${Api_link}/Teamworks/GetAllTeam`);
    }
    createWhoUsTeamWorks(data:any){
       this.http.post(`${Api_link}/Teamworks/AddFactor`,data).subscribe();
    }
    deleteWhoUsTeamWorks(id:number){
      this.http.delete(`${Api_link}/Teamworks/DeleteTeammember?id=${id}`).subscribe();
   }
    updateWhoUsTeamWorks(id:number,data:any){
      this.http.put(`${Api_link}/Teamworks/updateupdateteam?id=${id}` , data).subscribe();
    }
    /* ------------------------------------------------------------------------------------------------------- */


    /* ------------------------------------------- Description in Who-us API ---------------------------------------------- */
    getWhoUsDescription():Observable<WhoUs[]>{
      return this.http.get<WhoUs[]>(`${Api_link}/Whous/GetAllDescription`);
    }
    createWhoUsDescription(data:any){
       this.http.post(`${Api_link}/Whous/AddDescription`,data).subscribe();
    }
    deleteWhoUsDescription(id:number){
      this.http.delete(`${Api_link}/Whous/DeleteDescription?id=${id}`).subscribe();
   }
    updateWhoUsDescription(id:number,data:any){
      this.http.put(`${Api_link}/Whous/updateDescription?id=${id}` , data).subscribe();
    }
    /* ------------------------------------------------------------------------------------------------------- */

    /* ------------------------------------------- our-clients in Who-us API ---------------------------------------------- */
  //   getWhoUsOurClients():Observable<WhoUs[]>{
  //     return this.http.get<WhoUs[]>("");
  //   }
  //   createWhoUsOurClients(data:any){
  //      this.http.post("",data).subscribe();
  //   }
  //   deleteWhoUsOurClients(id:number){
  //     this.http.delete(`?id=${id}`).subscribe();
  //  }
  //   updateWhoUsOurClients(id:number,data:any){
  //     this.http.put(`?id=${id}` , data).subscribe();
  //   }
    /* ------------------------------------------------------------------------------------------------------- */

}
