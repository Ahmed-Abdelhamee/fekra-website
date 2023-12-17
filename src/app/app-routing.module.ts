import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AdvertisngComponent } from './Components/advertisng/advertisng.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { ElectioncampaignsComponent } from './Components/electioncampaigns/electioncampaigns.component';
import { MobileappComponent } from './Components/mobileapp/mobileapp.component';
import { WebsitedesignComponent } from './Components/websitedesign/websitedesign.component';
import { WhousComponent } from './Components/whous/whous.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"advertisment",component:AdvertisngComponent},
  {path:"contact-us",component:ContactusComponent},
  {path:"ele",component:ElectioncampaignsComponent},
  {path:"mob",component:MobileappComponent},
  {path:"web-desgin",component:WebsitedesignComponent},
  {path:"whous",component:WhousComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,scrollPositionRestoration:"enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// scrollPositionRestoration:"disabled"
