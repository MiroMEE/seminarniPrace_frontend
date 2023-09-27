import { Component, ElementRef, ViewChild } from '@angular/core';
import { SlovickaService } from 'src/app/services/slovicka.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-slovicka',
  templateUrl: './slovicka.component.html',
  styleUrls: ['./slovicka.component.scss']
})
export class SlovickaComponent {

  constructor(private Slovicka:SlovickaService, private formbuilder:FormBuilder){}
  
  //input
  @ViewChild('inVypisSlovicka') public inVypisSlovicka!: ElementRef;
  @ViewChild('inSmazatSlovicka') public inSmazatSlovicka!: ElementRef;
  @ViewChild('_first') public _first!: ElementRef;
  @ViewChild('_second') public _second!: ElementRef;

  //vypis - string
  public _vytvorSlovicko:string = "Vytvoř slovicka (name)!";
  public _vypisSlovicka:string = "Napiš id Slovicka!";
  public _aktualizovatSlovicka:string = "Aktualizuj slovíčka!";
  public _smazatSlovicka:string = "Smazat slovíčka!";

  // disabled button
  public dBvypisSlovicka:boolean = true;
  public dBsmazatSlovicka:boolean = true;

  //proVytvoreniJSONU
  public slovicko_input_arr:number = 0;
  public slovicko_input:boolean = false;
  public _id:string = "id";
  public _vsechnaSlovicka:any = [];
  public vytvoreniXaktualizovani:boolean = true;
  public slovicka_json:any = [];
  public buttonDalsiSlovicko:number = this.slovicka_json.length;
  // Formuláře
  public vytvareniSlovicka = this.formbuilder.group({
    name: '',
    slovicka_json: ''
  });
  public aktualizovatSlovicka = this.formbuilder.group({
    id: '',
    name: '',
    slovicka_json: ''
  })
  //methods

  public button_vsechnaSlovicka():void{
    this.Slovicka.vsechnaSlovicka().subscribe((value:string)=>{
      this._vsechnaSlovicka = value;
    })
  }
  public button_vytvorSlovicka():void{
    this.buttonDalsiSlovicko = 0;
    this.vytvareniSlovicka.controls.slovicka_json.setValue(JSON.stringify(this.slovicka_json));
    this.Slovicka.vytvoritSlovicka(this.vytvareniSlovicka.value).subscribe((value:object)=>{
      this.slovicka_json = [];
      this._vytvorSlovicko = JSON.stringify(value);
    });
  }
  public button_updateSlovicka():void{
    this.aktualizovatSlovicka.controls.slovicka_json.setValue(JSON.stringify(this.slovicka_json));
    this.aktualizovatSlovicka.controls.id.setValue(this._id);
    const filtrujese = this.filterEmptyFields(this.aktualizovatSlovicka.value)
    this.Slovicka.aktualizovatSlovicka(filtrujese).subscribe((value:object)=>{
      this._aktualizovatSlovicka = JSON.stringify(value);
      this.vytvoreniXaktualizovani = !this.vytvoreniXaktualizovani;
      this.button_vsechnaSlovicka();
    })
  }
  public button_smazatSlovicka(smazat:string):void{
    this.Slovicka.smazatSlovicka({id:smazat}).subscribe((value:object)=>{
      this._smazatSlovicka = JSON.stringify(value);
      this.button_vsechnaSlovicka();
    })
  }

  public slovickoAdd():void{
    this.buttonDalsiSlovicko += 1;
    this.slovicka_json.push({first:"",second:""});
  }
  public vytvor_aktulizuj(id:string){
    this.Slovicka.vypsatSlovicko(id).subscribe((value:any)=>{
      this.slovicka_json = JSON.parse(value.slovicka_json);
      this.buttonDalsiSlovicko = this.slovicka_json.length;
    });
    this.vytvoreniXaktualizovani = !this.vytvoreniXaktualizovani;
    this._id = id;
  }
  public ngOnInit():void{
    this.dBvypisSlovicka = false;
    this.dBsmazatSlovicka = false;
  }
  private filterEmptyFields(data: any): any {
    let fields:any = {};
    Object.keys(data).forEach(key =>  data[key] != '' ? fields[key] = data[key] : key);
    return fields;   
  }
}
