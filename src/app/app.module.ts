import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeChildOneComponent } from './home-child-one/home-child-one.component';
import { HomeChildTwoComponent } from './home-child-two/home-child-two.component';
import { CookieModule } from 'ngx-cookie';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeChildOneComponent,
    HomeChildTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CookieModule.withOptions()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
