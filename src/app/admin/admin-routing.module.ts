import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdvertismentComponent } from '../admin/advertisment/advertisment.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { WebDesignComponent } from '../admin/web-design/web-design.component';
import { WhoUsComponent } from './who-us/who-us.component';
import { ElectionCampaignsComponent } from './election-campaigns/election-campaigns.component';
import { IsAdminGuard } from '../services/is-admin.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"admin",component:AdminComponent, children:[
    {path:"" , component:AdminLoginComponent },
    {path:"home" , component:HomeComponent , canActivate : [IsAdminGuard]},
    {path:"advertisment" , component:AdvertismentComponent , canActivate : [IsAdminGuard]},
    {path:"web-design" , component:WebDesignComponent , canActivate : [IsAdminGuard]},
    {path:"who-us" , component:WhoUsComponent , canActivate : [IsAdminGuard]},
    {path:"election" , component:ElectionCampaignsComponent , canActivate : [IsAdminGuard]}
    // {path:"" , component:},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
