import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { design } from 'src/app/admin/interfaces/design.interface';
import { DataService } from 'src/app/new-services/data.service';
import  * as AOS from 'aos' ;
import { SwiperOptions } from 'swiper';
// import { OwlOptions } from 'ngx-owl-carousel-o';
// import { register } from 'swiper/element/bundle'; 
// register();

@Component({
  selector: 'app-websitedesign',
  templateUrl: './websitedesign.component.html',
  styleUrls: ['./websitedesign.component.scss']
})
export class WebsitedesignComponent implements OnInit {
  slides:any = [
    {id: 1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAyyP19XdqC5cbYPiWLSHiWIO7KsKwVBFkg&usqp=CAU"},
    {id: 2, img: "data:image/jpeg;base64,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"},
    {id: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePEWhvfGlK_CxJjsTbF2FFzPUSb2n4VXTeg&usqp=CAU"},
    {id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePEWhvfGlK_CxJjsTbF2FFzPUSb2n4VXTeg&usqp=CAU"},
    {id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQTOGxx4_4R3muOrerTbS9vCsKdOFMaGmYw&usqp=CAU"},
    {id: 6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpx-dEwekhMP1Al_I8ROswcYViFYYGgJUDCQ&usqp=CAU"},
    {id: 7, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3772ByfHnSGJjGl8d1O-5Yw1YPNOk-omuwg&usqp=CAU"}
  ];
  designList:design[]=[];
  designListShow:design[]=[];
  leftOrRight:string="";
  @ViewChild('scroller') scroller!:ElementRef;
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: true,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }

  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay:true,
    spaceBetween: 30
  };  
  
  list:string[]=["assets/Frame12.png","assets/Frame13.png","assets/Frame14.png","assets/Frame15.png","assets/Frame16.png","assets/Frame17.png","assets/Frame18.png","assets/Frame19.png"]
  // designList:design[]=[];
  // api_link="http://markitingwebsite-001-site1.dtempurl.com"
  constructor(private dataServ: DataService) {
    if(sessionStorage.getItem("runCarsouel")!="website loaded"){
      sessionStorage.setItem("runCarsouel","website loaded")
      location.reload();
    }
    this.dataServ.getOurWorks().subscribe({
      next: data => {
        for (const key in data) {
          this.designList.push(data[key])
        }
      },
      complete:()=>{
        if(window.innerWidth > 700 ){
          for(let i=0 ; i < 3 ; i++ ){
            this.designListShow.push(this.designList[i])
          }
        }else{
          for(let i=0 ; i < this.designList.length ; i++ ){
            this.designListShow.push(this.designList[i])
          }
        }
      }
    })
  }

  ngOnInit(): void {
    AOS.init();
  }

  scroll_list_to_right(){
    this.leftOrRight="rightScroll";
    let itemDeleted=this.designList.pop()!
    this.designList.unshift(itemDeleted)
    this.designListShow=[]
    for(let i=0 ; i < 3 ; i++ ){
      this.designListShow.push(this.designList[i])
    }
  }

  scroll_list_to_left(){
    this.leftOrRight="leftScroll";
    let itemDeleted=this.designList.shift()!;
    this.designList.push(itemDeleted)
    this.designListShow=[]
    for(let i=0 ; i < 3 ; i++ ){
      this.designListShow.push(this.designList[i])
    }
  }

  intervalCounter=0;
  intervalCounterView=3;
  interLeft:any;
  interRight:any;
  left(){
    clearInterval(this.interRight)
    clearInterval(this.interLeft)
    if(this.intervalCounterView<this.list.length){
      this.interLeft= window.setInterval(()=>{this.scroller.nativeElement.style.marginRight=`${this.intervalCounter}vw`;
      this.intervalCounter--;
        if(this.intervalCounter%25==0){
          clearInterval(this.interLeft)
          this.intervalCounterView++;
        }
      },10);
    }else{
      this.intervalCounterView=this.list.length
    }
  }
  
  right(){
    clearInterval(this.interLeft)
    clearInterval(this.interRight)
    if(this.intervalCounterView>3){
      this.interRight= window.setInterval(()=>{this.scroller.nativeElement.style.marginRight=`${this.intervalCounter}vw`;
      this.intervalCounter++;
      if(this.intervalCounter%25==0){
        clearInterval(this.interRight)
        this.intervalCounterView--;
      }
      },10);
    }else{
      this.intervalCounterView=3
    }
  }


//      id:any;
//  myMove() {
//   let elem = document.getElementById("myAnimation");   
//   let pos = 0;
//   clearInterval(this.id!);
//   this.id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(this.id);
//     } else {
//       pos++; 
//       elem.style.top = pos + 'px'; 
//       elem.style.left = pos + 'px'; 
//     }
//   }
// }
}
