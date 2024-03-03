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
import { ToastrService } from 'ngx-toastr';
import { electionPDF } from '../admin/interfaces/electionPDF.interface';
import { electionSamples } from '../admin/interfaces/electionSamples.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  databaseURL: any = environment.firebase.databaseURL;

  constructor(private http: HttpClient, private toastr: ToastrService) {
  }


  // ******************************************** HomeSerevices Data ********************************************
  getHomeSerevices(): Observable<homeServices[]> {
    return this.http.get<homeServices[]>(`${this.databaseURL}/HomeSerevicesData.json`)
  }
  createHomeSerevices(data: any) {
    this.http.post(`${this.databaseURL}/HomeSerevicesData.json`, data).subscribe(() => {
      location.reload()
    })
  }
  updateHomeSerevices(key: string, data: any) {
    this.http.put(`${this.databaseURL}/HomeSerevicesData/${key}.json`, data).subscribe(() => {
      location.reload()
    });
  }


  // ******************************************** Advertisment Data ********************************************

  getAdvertisment(): Observable<advertisment[]> {
    return this.http.get<advertisment[]>(`${this.databaseURL}/advertismentData.json`)
  }
  async createAdvertisment(data: any) {
    this.http.post(`${this.databaseURL}/advertismentData.json`, data).subscribe(() => {
      this.toastr.success("تم رفع المحتوي")
    })
  }
  async updateAdvertisment(key: string, data: any) {
    this.http.put(`${this.databaseURL}/advertismentData/${key}.json`, data).subscribe(() => {
      this.toastr.warning("تم تعديل المحتوي")
    });
  }
  deleteAdvertisment(key: string) {
    this.http.delete(`${this.databaseURL}/advertismentData/${key}.json`).subscribe()
  }



  // ******************************************** Election Data ********************************************

  getElection(): Observable<election[]> {
    return this.http.get<election[]>(`${this.databaseURL}/ElectionImages.json`)
  }
  createElection(data: any) {
    return this.http.post(`${this.databaseURL}/ElectionImages.json`, data).subscribe(() => {
      location.reload()
    })
  }
  updateElection(key: string, data: any) {
    this.http.put(`${this.databaseURL}/ElectionImages/${key}.json`, data).subscribe(() => {
      location.reload()
    });
  }
  deleteElection(key: string) {
    this.http.delete(`${this.databaseURL}/ElectionImages/${key}.json`).subscribe(() => {
      location.reload()
    })
  }

  // ***************************************** election Samples *************************************

  getElectionSamples(): Observable<electionSamples[]> {
    return this.http.get<electionSamples[]>(`${this.databaseURL}/ElectionSamples.json`)
  }
  async createElectionSamples(data: any) {
    return this.http.post(`${this.databaseURL}/ElectionSamples.json`, data).subscribe()
  }
  async updateElectionSamples(key: string, data: any) {
    this.http.put(`${this.databaseURL}/ElectionSamples/${key}.json`, data).subscribe();
  }

  // ***************************************** update election PDF ****************************************

  getElectionPDF(): Observable<electionPDF[]> {
    return this.http.get<electionPDF[]>(`${this.databaseURL}/ElectionPdf.json`)
  }
  async updateElectionPdf(key: string, data: any) {
    this.http.put(`${this.databaseURL}/ElectionPdf/${key}.json`, data).subscribe(() => {
      this.toastr.warning("تم تعديل الملف ")
    });
  }



  // ******************************************** OurWorks Data ********************************************

  getOurWorks(): Observable<design[]> {
    return this.http.get<design[]>(`${this.databaseURL}/OurWorksImages.json`)
  }
  async createOurWorks(data: any) {
    this.http.post(`${this.databaseURL}/OurWorksImages.json`, data).subscribe(() => {
      location.reload()
    })
  }
  async updateOurWorks(key: string, data: any) {
    this.http.put(`${this.databaseURL}/OurWorksImages/${key}.json`, data).subscribe(() => {
      location.reload()
    });
  }
  deleteOurWorks(key: string) {
    this.http.delete(`${this.databaseURL}/OurWorksImages/${key}.json`).subscribe()
  }



  // ******************************************** Who-Us Description ********************************************

  getWhoUsDescription(): Observable<WhoUs[]> {
    return this.http.get<WhoUs[]>(`${this.databaseURL}/WhoUsDescription.json`)
  }
  async createWhoUsDescription(data: any) {
    this.http.post(`${this.databaseURL}/WhoUsDescription.json`, data).subscribe(() => {
      this.toastr.success("تم رفع المحتوي")
    })
  }
  async updateWhoUsDescription(key: string, data: any) {
    this.http.put(`${this.databaseURL}/WhoUsDescription/${key}.json`, data).subscribe(() => {
      this.toastr.warning("تم تعديل المحتوي")
    });
  }
  deleteWhoUsDescription(key: string) {
    this.http.delete(`${this.databaseURL}/WhoUsDescription/${key}.json`).subscribe()
  }



  // ******************************************** Who-Us Services ********************************************

  getWhoUsServices(): Observable<Services[]> {
    return this.http.get<Services[]>(`${this.databaseURL}/WhoUsServices.json`)
  }
  async createWhoUsServices(data: any) {
    this.http.post(`${this.databaseURL}/WhoUsServices.json`, data).subscribe(() => {
      this.toastr.success("تم رفع المحتوي")
    })
  }
  async updateWhoUsServices(key: string, data: any) {
    this.http.put(`${this.databaseURL}/WhoUsServices/${key}.json`, data).subscribe(() => {
      this.toastr.warning("تم تعديل المحتوي")
    });
  }
  deleteWhoUsServices(key: string) {
    this.http.delete(`${this.databaseURL}/WhoUsServices/${key}.json`).subscribe()
  }



  // ******************************************** Who-Us TeamWorks ********************************************
  
  getWhoUsTeamWorks(): Observable<OurTeam[]> {
    return this.http.get<OurTeam[]>(`${this.databaseURL}/WhoUsTeamWorks.json`)
  }
  async createWhoUsTeamWorks(data: any) {
    this.http.post(`${this.databaseURL}/WhoUsTeamWorks.json`, data).subscribe(() => {
      this.toastr.success("تم رفع المحتوي")
    })
  }
  async updateWhoUsTeamWorks(key: string, data: any) {
    this.http.put(`${this.databaseURL}/WhoUsTeamWorks/${key}.json`, data).subscribe(() => {
      this.toastr.warning("تم تعديل المحتوي")
    });
  }
  deleteWhoUsTeamWorks(key: string) {
    this.http.delete(`${this.databaseURL}/WhoUsTeamWorks/${key}.json`).subscribe()
  }



  // ******************************************** Who-Us OurClients ********************************************

  getWhoUsOurClients(): Observable<OurClients[]> {
    return this.http.get<OurClients[]>(`${this.databaseURL}/WhoUsOurClients.json`)
  }
  async createWhoUsOurClients(data: any) {
    this.http.post(`${this.databaseURL}/WhoUsOurClients.json`, data).subscribe(() => {
      this.toastr.success("تم رفع المحتوي")
    })
  }
  async updateWhoUsOurClients(key: string, data: any) {
    this.http.put(`${this.databaseURL}/WhoUsOurClients/${key}.json`, data).subscribe(() => {
      this.toastr.warning("تم تعديل المحتوي")
    });
  }
  deleteWhoUsOurClients(key: string) {
    this.http.delete(`${this.databaseURL}/WhoUsOurClients/${key}.json`).subscribe()
  }



}
