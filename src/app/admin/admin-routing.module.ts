import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdvertismentComponent } from '../admin/advertisment/advertisment.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { WebDesignComponent } from '../admin/web-design/web-design.component';
import { WhoUsComponent } from './who-us/who-us.component';
import { ElectionCampaignsComponent } from './election-campaigns/election-campaigns.component';

const routes: Routes = [
  {path:"admin",component:AdminComponent, children:[
    {path:"" , component:AdminLoginComponent},
    {path:"advertisment" , component:AdvertismentComponent},
    {path:"web-design" , component:WebDesignComponent},
    {path:"who-us" , component:WhoUsComponent},
    {path:"election" , component:ElectionCampaignsComponent}
    // {path:"" , component:},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
