import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ElectioncampaignsComponent } from './Components/electioncampaigns/electioncampaigns.component';
import { WebsitedesignComponent } from './Components/websitedesign/websitedesign.component';
import { WhousComponent } from './Components/whous/whous.component';
import { MobileappComponent } from './Components/mobileapp/mobileapp.component';
import { AdvertisngComponent } from './Components/advertisng/advertisng.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { AdminModule } from './admin/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ElectioncampaignsComponent,
    WebsitedesignComponent,
    WhousComponent,
    MobileappComponent,
    AdvertisngComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide : LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
