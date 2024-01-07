import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorslovicekComponent } from './components/static/editorslovicek/editorslovicek.component';
import { HomeComponent } from './components/static/home/home.component';
import { UzivatelComponent } from './components/static/uzivatel/uzivatel.component';
import { NavbarComponent } from './components/reused/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProcvicovaniComponent } from './components/static/procvicovani/procvicovani.component';
import { CommonModule } from '@angular/common';
import { SkatulataComponent } from './components/hrani/skatulata/skatulata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import { VicehracuMistnostComponent } from './components/static/vicehracu-mistnost/vicehracu-mistnost.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegistraceComponent } from './components/reused/registrace/registrace.component';
import { PrihlaseniComponent } from './components/reused/prihlaseni/prihlaseni.component';
import { ZiskatSlovickaComponent } from './components/reused/ziskat-slovicka/ziskat-slovicka.component';
@NgModule({
  declarations: [
    AppComponent,
    EditorslovicekComponent,
    HomeComponent,
    UzivatelComponent,
    NavbarComponent,
    ProcvicovaniComponent,
    SkatulataComponent,
    VicehracuMistnostComponent,
    RegistraceComponent,
    PrihlaseniComponent,
    ZiskatSlovickaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatListModule,
    MatButtonToggleModule,
    DragDropModule,
    MatGridListModule,
    NgbModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
