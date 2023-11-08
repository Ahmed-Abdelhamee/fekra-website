import { Component, OnInit } from '@angular/core';
import  * as AOS from 'aos' ;

@Component({
  selector: 'app-mobileapp',
  templateUrl: './mobileapp.component.html',
  styleUrls: ['./mobileapp.component.scss']
})
export class MobileappComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
