import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlovickaComponent } from './components/slovicka/slovicka.component';
import { HomeComponent } from './components/home/home.component';
import { TeorieComponent } from './components/teorie/teorie.component';
import { UzivatelComponent } from './components/uzivatel/uzivatel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SlovickaComponent,
    HomeComponent,
    TeorieComponent,
    UzivatelComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
