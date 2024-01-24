import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/reused/navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { authInterceptorProviders } from './_helpers/auth.interceptor.service';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarComponent,
    BrowserAnimationsModule,
  ],
  providers: [authInterceptorProviders,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// UŽ VÍM, MUSÍM TO PŘEDĚLAT NA LOCALSTORAGE!!! 