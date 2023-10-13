import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { advertisment } from '../admin/interfaces/advertisment.interface';
import { election } from '../admin/interfaces/election.interface';
import { OurTeam, Services, WhoUs } from '../admin/interfaces/who-us.interface';
import { design } from '../admin/interfaces/design.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { }

  /* ---------------------------------------- Advertisments API--------------------------------------- */
  getAdvertisments():Observable<advertisment[]>{
    return this.http.get<advertisment[]>("http://markitingwebsite-001-site1.dtempurl.com/api/Advertising/GetAllAdvertisng");
  }
  createAdvertisments(data:any){
     this.http.post("http://markitingwebsite-001-site1.dtempurl.com/api/Advertising/AddAdvertising",data).subscribe();
  }
  deleteAdvertisments(id:number){
    this.http.delete(`http://markitingwebsite-001-site1.dtempurl.com/api/Advertising/DeleteAdvertising?id=${id}`).subscribe();
  }
  updateAdvertisments(id:number,data:any){
    this.http.put(`http://markitingwebsite-001-site1.dtempurl.com/api/Advertising/updateAdvertising?id=${id}` , data).subscribe();
  }
  /* ------------------------------------------------------------------------------------------------------- */

  /* ------------------------------------------- Election API ---------------------------------------------- */
  getElection():Observable<election[]>{
    return this.http.get<election[]>("http://markitingwebsite-001-site1.dtempurl.com/api/Election/GetAllelection");
  }
  createElection(data:any){
     this.http.post("http://markitingwebsite-001-site1.dtempurl.com/api/Election/Addelection",data).subscribe();
  }
  deleteElection(id:number){
    this.http.delete(`http://markitingwebsite-001-site1.dtempurl.com/api/Election/Deleteelection?id=${id}`).subscribe();
 }
  updateElection(id:number,data:any){
    this.http.put(`http://markitingwebsite-001-site1.dtempurl.com/api/Election/updateElection?id=${id}` , data).subscribe();
  }
  /* ------------------------------------------------------------------------------------------------------- */

  /* ------------------------------------------- our-works in web-desgin API ---------------------------------------------- */
  getOurWorks():Observable<design[]>{
    return this.http.get<design[]>("http://markitingwebsite-001-site1.dtempurl.com/api/Ourworks/GetAllworks");
  }
  createOurWorks(data:any){
     this.http.post("http://markitingwebsite-001-site1.dtempurl.com/api/Ourworks/AddWork",data).subscribe();
  }
  deleteOurWorks(id:number){
    this.http.delete(`http://markitingwebsite-001-site1.dtempurl.com/api/Ourworks/ Deleteworker?id=${id}`).subscribe();
 }
  updateOurWorks(id:number,data:any){
    this.http.put(`http://markitingwebsite-001-site1.dtempurl.com/api/Ourworks/updatework?id=${id}` , data).subscribe();
  }
  /* ------------------------------------------------------------------------------------------------------- */

  /* ------------------------------------------- Services in who-us API ---------------------------------------------- */
  getWhoUsServices():Observable<Services[]>{
    return this.http.get<Services[]>("http://markitingwebsite-001-site1.dtempurl.com/api/Services/GetAllservices");
  }
  createWhoUsServices(data:any){
     this.http.post("http://markitingwebsite-001-site1.dtempurl.com/api/Services/Addservices",data).subscribe();
  }
  deleteWhoUsServices(id:number){
    this.http.delete(`http://markitingwebsite-001-site1.dtempurl.com/api/Services/Deleteservices?id=${id}`).subscribe();
 }
  updateWhoUsServices(id:number,data:any){
    this.http.put(`http://markitingwebsite-001-site1.dtempurl.com/api/Services/updateservices?id=${id}` , data).subscribe();
  }
  /* ------------------------------------------------------------------------------------------------------- */


    /* ------------------------------------------- Team members in who-us API ---------------------------------------------- */
    getWhoUsTeamWorks():Observable<OurTeam[]>{
      return this.http.get<OurTeam[]>("http://markitingwebsite-001-site1.dtempurl.com/api/Teamworks/GetAllTeam");
    }
    createWhoUsTeamWorks(data:any){
       this.http.post("http://markitingwebsite-001-site1.dtempurl.com/api/Teamworks/AddFactor",data).subscribe();
    }
    deleteWhoUsTeamWorks(id:number){
      this.http.delete(`http://markitingwebsite-001-site1.dtempurl.com/api/Teamworks/DeleteTeammember?id=${id}`).subscribe();
   }
    updateWhoUsTeamWorks(id:number,data:any){
      this.http.put(`http://markitingwebsite-001-site1.dtempurl.com/api/Teamworks/updateupdateteam?id=${id}` , data).subscribe();
    }
    /* ------------------------------------------------------------------------------------------------------- */


    /* ------------------------------------------- Description in Who-us API ---------------------------------------------- */
    getWhoUsDescription():Observable<WhoUs[]>{
      return this.http.get<WhoUs[]>("http://markitingwebsite-001-site1.dtempurl.com/api/Whous/GetAllDescription");
    }
    createWhoUsDescription(data:any){
       this.http.post("http://markitingwebsite-001-site1.dtempurl.com/api/Whous/AddDescription",data).subscribe();
    }
    deleteWhoUsDescription(id:number){
      this.http.delete(`http://markitingwebsite-001-site1.dtempurl.com/api/Whous/DeleteDescription?id=${id}`).subscribe();
   }
    updateWhoUsDescription(id:number,data:any){
      this.http.put(`http://markitingwebsite-001-site1.dtempurl.com/api/Whous/updateDescription?id=${id}` , data).subscribe();
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
