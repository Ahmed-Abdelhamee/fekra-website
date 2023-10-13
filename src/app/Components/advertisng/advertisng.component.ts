import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { advertisment } from 'src/app/admin/interfaces/advertisment.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-advertisng',
  templateUrl: './advertisng.component.html',
  styleUrls: ['./advertisng.component.scss']
})
export class AdvertisngComponent implements OnInit {

  advertismentList:advertisment[]=[]
  constructor( private formBuilder:FormBuilder , private route : Router , private dataSrv:DataService) { 
    dataSrv.getAdvertisments().subscribe(data =>{
      this.advertismentList=data
    })
  }


  ngOnInit(): void {
  }

}
