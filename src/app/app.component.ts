import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marketing-web';

  header_footer_Display: boolean = true;


  constructor(private route: Router) {

    route.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        if (route.url.split("/").includes("admin-dash")) {
          this.header_footer_Display = false;
        } else {
          this.header_footer_Display = true;
        }
      }
    })

    route.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        if (!route.url.split("/").includes("admin-dash")) {
          if (sessionStorage.getItem("the page which work is ") != route.url.toString().split("/")[route.url.toString().split("/").length - 1]) {
            sessionStorage.setItem("the page which work is ", route.url.toString().split("/")[route.url.toString().split("/").length - 1]);
            location.reload()
          }
        } else {
          sessionStorage.removeItem("advertisment");
        }
      }
    })
  }

}
