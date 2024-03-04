import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { TeamComponent } from './team/team/team.component';

const routes: Routes = [
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  // { path: 'team', component: TeamComponent},
  { path: 'contact', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterpagerRoutingModule { }
