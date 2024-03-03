import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterpageModule } from './masterpages/masterpage.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './homePage/home/home.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FullLayoutComponent,
    NavbarComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasterpageModule,
    NgbModule,
    // HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
