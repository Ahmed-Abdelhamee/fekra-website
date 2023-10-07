import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdvertismentComponent } from './advertisment/advertisment.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { ElectionCampaignsComponent } from './election-campaigns/election-campaigns.component';
import { WhoUsComponent } from './who-us/who-us.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdvertismentComponent,
    WebDesignComponent,
    ElectionCampaignsComponent,
    WhoUsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
