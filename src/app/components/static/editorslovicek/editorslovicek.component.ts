import { Component, ElementRef, ViewChild } from '@angular/core';
import { SlovickaService } from 'src/app/services/slovicka.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editorslovicek',
  templateUrl: './editorslovicek.component.html',
  styleUrls: ['./editorslovicek.component.scss']
})
export class EditorslovicekComponent {

  constructor(private Slovicka:SlovickaService, private formbuilder:FormBuilder){}
  
  //input
  @ViewChild('inVypisSlovicka') public inVypisSlovicka!: ElementRef;
  @ViewChild('inSmazatSlovicka') public inSmazatSlovicka!: ElementRef;
  @ViewChild('_first') public _first!: ElementRef;
  @ViewChild('_second') public _second!: ElementRef;

  //vypis - string
  public _vytvorSlovicko:string = "";
  public _vypisSlovicka:string = "Napiš id Slovicka!";
  public _aktualizovatSlovicka:string = "";
  public _smazatSlovicka:string = "Smazat slovíčka!";

  // disabled button
  public dBvypisSlovicka:boolean = true;
  public dBsmazatSlovicka:boolean = true;

  //proVytvoreniJSONU
  public _vsechnaSlovicka:any = []; // ukládá list slovíček
  public slovicka_json:any = []; // ukládá slovíčka ve tvaru json
  public _id:string = "id"; // ukládá id, možné jen u aktualizace
  public nabidka_1:string = "nic"; // [nic,vytvor,aktualizace]
  public start_editing:boolean = false; // aktualizace - upravování
  public slovicko_input:boolean = false; // ukládá, jestli mění se slovíčko [přidává, upravuje]
  public slovicko_input_arr:number = 0; // ukládá si data

  // Formuláře
  public vytvareniSlovicka = this.formbuilder.group({
    name: '',
    jazyk: '',
    slovicka_json: ''
  });
  public aktualizovatSlovicka = this.formbuilder.group({
    id: '',
    name: '',
    jazyk: '',
    slovicka_json: ''
  })
  //methods

  public button_vsechnaSlovicka():void{
    this.Slovicka.vsechnaSlovicka().subscribe((value:string)=>{
      this._vsechnaSlovicka = value;
    })
  }
  public button_vytvorSlovicka():void{
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
      this.start_editing = false;
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
    this.slovicka_json.push({first:"",second:""});
  }
  public vytvor_aktulizuj(id:string){
    this.Slovicka.vypsatSlovicko(id).subscribe((value:any)=>{
      this.slovicka_json = JSON.parse(value.slovicka_json);
    });
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
  public reset():void{
    this.start_editing=false;
    this.slovicka_json=[];
    this._id='';
    this._vsechnaSlovicka = [];
    this.slovicko_input = false;
    this.slovicko_input_arr = 0;
  }
}
