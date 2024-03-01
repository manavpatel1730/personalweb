import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterpagerRoutingModule } from './masterpager-routing.module';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { TeamComponent } from './team/team/team.component';



@NgModule({
  declarations: [

    AboutUsComponent,
    ContactUsComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    MasterpagerRoutingModule
    ]
})
export class MasterpageModule { }
