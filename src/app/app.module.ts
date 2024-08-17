import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlansComponent } from './plans/plans.component';
import { PackagesComponent } from './packages/packages.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { ContactComponent } from './contact/contact.component';
import { SComponent } from './s/s.component';
import {FormsModule} from '@angular/forms';
import { ScoreComponent } from './score/score.component';
import { Feedback1Component } from './feedback1/feedback1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    PlansComponent,
    PackagesComponent,
    FeedbackComponent,
    DestinationsComponent,
    ContactComponent,
    SComponent,
    ScoreComponent,
    Feedback1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
