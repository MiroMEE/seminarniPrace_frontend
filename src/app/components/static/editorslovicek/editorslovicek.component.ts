import { Component, ElementRef, ViewChild } from '@angular/core';
import { SlovickaService } from 'src/app/services/slovicka.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SlovickaJson, SlovickaReady } from 'src/app/interface/slovicka';
import { SlovickaOwnComponent } from "./slovicka-own/slovicka-own.component";
import { SlovickaVytvorComponent } from './slovicka-vytvor/slovicka-vytvor.component';

@Component({
    selector: 'app-editorslovicek',
    templateUrl: './editorslovicek.component.html',
    styleUrls: ['./editorslovicek.component.scss'],
    standalone: true,
    providers: [],
    imports: [SlovickaVytvorComponent,MatFormFieldModule, MatInputModule, MatButtonModule, NgbNavModule, ReactiveFormsModule, CommonModule, SlovickaOwnComponent]
})
export class EditorslovicekComponent {
  create_bool:boolean = false;
  update_bool:boolean = false;
  addDataUpdate(data:boolean) {
    console.log(data);
    this.update_bool = data;
  }
  addDataVytvor(data:boolean){
    console.log(data);
    this.create_bool = data;
  }
}
