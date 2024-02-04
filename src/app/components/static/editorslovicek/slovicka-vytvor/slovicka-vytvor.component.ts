import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SlovickaJson, slovicko } from 'src/app/interface/slovicka';
import { SlovickaService } from 'src/app/services/slovicka.service';
import { SlovickaEditComponent } from '../slovicka-edit/slovicka-edit.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-slovicka-vytvor',
  templateUrl: './slovicka-vytvor.component.html',
  styleUrls: ['./slovicka-vytvor.component.scss'],
  standalone:true,
  imports:[SlovickaEditComponent,MatButtonModule,MatFormFieldModule,MatInputModule,CommonModule,ReactiveFormsModule],
})
export class SlovickaVytvorComponent {
  @Output() start_editing_emiter = new EventEmitter<boolean>();

  addData(value:boolean){
    this.start_editing_emiter.emit(value);
  }
  
  start_editing:boolean = false;
  slovickaEdit:Array<slovicko> = [];
  constructor(private Slovicka_serv:SlovickaService, private formBuilder:FormBuilder){}
  public vytvareniSlovicka = this.formBuilder.group<SlovickaJson>({
    name: '',
    jazyk: '',
    slovicka_json: ''
  });

  vytvorCelaSlovicka():void{
    const slovicka_json = JSON.stringify(this.slovickaEdit);
    this.vytvareniSlovicka.controls.slovicka_json.setValue(slovicka_json);

    this.Slovicka_serv.vytvoritSlovicka(this.vytvareniSlovicka.value).subscribe({
      next: value => console.log('Slovicko created: '+ value),
      error: err => console.log('Observable error button_vytvorSlovicka: '+err)
    });
  }
}
