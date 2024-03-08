import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from 'src/app/masterpages/about/about-us/about-us.component';
import { ContactUsComponent } from 'src/app/masterpages/contact/contact-us/contact-us.component';
import { TeamComponent } from 'src/app/masterpages/team/team/team.component';

const routes: Routes = [
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'team', component: TeamComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
