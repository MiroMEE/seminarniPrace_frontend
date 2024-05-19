import { Component } from '@angular/core';
import {MatTabsModule } from '@angular/material/tabs';
import { RegistraceComponent } from './registrace/registrace.component';
import { PrihlaseniComponent } from './prihlaseni/prihlaseni.component';
@Component({
  selector: 'app-uzivatel',
  templateUrl: './uzivatel.component.html',
  styleUrls: ['./uzivatel.component.scss'],
  standalone:true,
  imports:[MatTabsModule,RegistraceComponent,PrihlaseniComponent]
})
export class UzivatelComponent {

}
