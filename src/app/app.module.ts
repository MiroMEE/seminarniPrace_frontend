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
import { HryComponent } from './components/hry/hry.component';
import { CommonModule } from '@angular/common';
import { SkatulataComponent } from './components/hry/skatulata/skatulata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SlovickaComponent,
    HomeComponent,
    TeorieComponent,
    UzivatelComponent,
    NavbarComponent,
    HryComponent,
    SkatulataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
