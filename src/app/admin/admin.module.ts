import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdvertismentComponent } from './advertisment/advertisment.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { ElectionCampaignsComponent } from './election-campaigns/election-campaigns.component';
import { WhoUsComponent } from './who-us/who-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    AdvertismentComponent,
    WebDesignComponent,
    ElectionCampaignsComponent,
    WhoUsComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
