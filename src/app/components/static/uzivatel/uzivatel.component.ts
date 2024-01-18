import { Component } from '@angular/core';
import {MatTabsModule } from '@angular/material/tabs';
import { RegistraceComponent } from '../../reused/registrace/registrace.component';
import { PrihlaseniComponent } from '../../reused/prihlaseni/prihlaseni.component';
@Component({
  selector: 'app-uzivatel',
  templateUrl: './uzivatel.component.html',
  styleUrls: ['./uzivatel.component.scss'],
  standalone:true,
  imports:[MatTabsModule,RegistraceComponent,PrihlaseniComponent]
})
export class UzivatelComponent {

}
