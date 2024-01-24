import { Component, ElementRef, ViewChild } from '@angular/core';
import { SlovickaService } from 'src/app/services/slovicka.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SlovickaJson, SlovickaReady } from 'src/app/interface/slovicka';

@Component({
  selector: 'app-editorslovicek',
  templateUrl: './editorslovicek.component.html',
  styleUrls: ['./editorslovicek.component.scss'],
  standalone:true,
  imports:[MatFormFieldModule,MatInputModule, MatButtonModule,NgbNavModule, ReactiveFormsModule,CommonModule],
  providers:[]
})
export class EditorslovicekComponent {
  constructor(private Slovicka:SlovickaService, private formBuilder:FormBuilder){}

  @ViewChild('inVypisSlovicka') public inVypisSlovicka!: ElementRef;
  @ViewChild('inSmazatSlovicka') public inSmazatSlovicka!: ElementRef;
  @ViewChild('_first') public _first!: ElementRef;
  @ViewChild('_second') public _second!: ElementRef;

  // disabled button
  public dBvypisSlovicka:boolean = true;
  public dBsmazatSlovicka:boolean = true;

  //proVytvoreniJSONU
  public vsechnaSlovicka:Array<SlovickaReady> = [];
  public slovicka:any = []; // ukládá slovíčka ve tvaru json
  public id:string = "id"; // ukládá id, možné jen u aktualizace
  public nabidka_1:string = "nic"; // [nic,vytvor,aktualizace]
  public start_editing:boolean = false; // aktualizace - upravování
  public slovicko_input:boolean = false; // ukládá, jestli mění se slovíčko [přidává, upravuje]
  public slovicko_input_arr:number = 0; // ukládá si data

  public vytvareniSlovicka = this.formBuilder.group<SlovickaJson>({
    name: '',
    jazyk: '',
    slovicka_json: ''
  });

  public button_vsechnaSlovicka():void{
    this.Slovicka.svojeSlovicka().subscribe({
      next: value => this.vsechnaSlovicka = value,
      error: err => console.error('Observable error vsechnaSlovicka: '+err)
    });
  }
  public button_vytvorSlovicka():void{
    const slovicka_json = JSON.stringify(this.slovicka);
    this.vytvareniSlovicka.controls.slovicka_json.setValue(slovicka_json);

    this.Slovicka.vytvoritSlovicka(this.vytvareniSlovicka.value).subscribe({
      next: value => console.log('Slovicko created: '+ value),
      error: err => console.log('Observable error button_vytvorSlovicka: '+err)
    });
  }
  public button_updateSlovicka():void{
    const slovicka_json = JSON.stringify(this.slovicka);
    this.Slovicka.aktualizovatSlovicka(this.id,slovicka_json).subscribe({
      next: value => {
        this.reset();
        console.log("Slovicko aktualizováno"+ value)
      },
      error: err => console.error("Observable error button_updateSlovicka: "+err)
    });
  }
  public button_smazatSlovicka(id:string):void{
    this.Slovicka.smazatSlovicka(id).subscribe({
      next: value => {
        this.reset()
        console.log('Slovicko smazáno', + value);
      },
      error: err => console.error('Observable error button_smazatSlovicka: '+err)
    });
  }

  public slovickoAdd():void{
    this.slovicka.push({first:"",second:""});
  }
  public vytvor_aktualizuj(id:string): void{
    console.log(id,this.slovicka)
    this.Slovicka.vypsatSlovicko(id).subscribe({
      next: value => {
        this.slovicka = JSON.parse(value.slovicka_json);
        this.id = id;
      },
      error: err => console.error('Observable error vytvor_aktualizuj: '+err)
    });
  }
  public ngOnInit():void{
    this.dBvypisSlovicka = false;
    this.dBsmazatSlovicka = false;
  }
  // private filterEmptyFields(data: any): any {
  //   let fields:any = {};
  //   Object.keys(data).forEach(key =>  data[key] != '' ? fields[key] = data[key] : key);
  //   return fields;   
  // }
  public reset():void{
    this.start_editing=false;
    this.slovicka=[];
    this.id='';
    this.vsechnaSlovicka = [];
    this.slovicko_input = false;
    this.slovicko_input_arr = 0;
  }
}
