import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterpageModule } from './masterpages/masterpage.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasterpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
