import { Component, ElementRef, ViewChild } from '@angular/core';
import { SlovickaService } from 'src/app/services/slovicka.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SlovickaJson, SlovickaReady } from 'src/app/interface/slovicka';
import { MojeSlovickaComponent } from "./moje-slovicka/moje-slovicka.component";
import { VytvorComponent } from './vytvor/vytvor.component';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss'],
    standalone: true,
    providers: [],
    imports: [VytvorComponent,MatFormFieldModule, MatInputModule, MatButtonModule, NgbNavModule, ReactiveFormsModule, CommonModule, MojeSlovickaComponent]
})
export class EditorComponent {
  create_bool:boolean = false;
  update_bool:boolean = false;
  addDataUpdate(data:boolean) {
    this.update_bool = data;
  }
  addDataVytvor(data:boolean){
    this.create_bool = data;
  }
}
