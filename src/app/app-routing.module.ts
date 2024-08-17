import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlansComponent } from './plans/plans.component';
import { ContactComponent } from './contact/contact.component';
import { PackagesComponent } from './packages/packages.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SComponent } from './s/s.component';

const routes: Routes = [{path:"Plans",component:PlansComponent},
  {path:"Contact",component:ContactComponent},{path:"Destinations"
  ,component:DestinationsComponent},{path:"Feedback",component:FeedbackComponent},{path:"Packages",component:PackagesComponent},{path:"s",component:SComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
