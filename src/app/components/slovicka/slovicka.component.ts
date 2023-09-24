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

  //vypis - string
  public _vytvorSlovicko:string = "Vytvoř slovicka (name)!";
  public _vsechnaSlovicka:string = "Zmáčkni, pro vypsání všech slovíček!";
  public _vypisSlovicka:string = "Napiš id Slovicka!";
  public _aktualizovatSlovicka:string = "Aktualizuj slovíčka!";
  public _smazatSlovicka:string = "Smazat slovíčka!";

  // disabled button
  public dBvsechnaSlovicka:boolean = true;
  public dBvypisSlovicka:boolean = true;
  public dBsmazatSlovicka:boolean = true;

  // Formuláře
  public vytvareniSlovicka = this.formbuilder.group({
    name: '',
    Slovicka_json: ''
  });
  public aktualizovatSlovicka = this.formbuilder.group({
    id: '',
    name: '',
    Slovicka_json: ''
  })
  //methods
  public button_vsechnaSlovicka():void{
    this.dBvsechnaSlovicka = true;
    this.Slovicka.vsechnaSlovicka().subscribe((value:object[])=>{
      this._vsechnaSlovicka = JSON.stringify(value);
    })
  }
  public button_vypisSlovicek():void{
    const hodnota = this.inVypisSlovicka.nativeElement
    this.Slovicka.vypsatSlovicko(hodnota.value).subscribe((value:object)=>{
      hodnota.value = "";
      hodnota.parentNode.parentNode.style.backgroundColor = "green";
      this._vypisSlovicka = JSON.stringify(value);
      this.dBvypisSlovicka = true;
    });
  }
  public button_vytvorSlovicka():void{
    this.Slovicka.vytvoritSlovicka(this.vytvareniSlovicka.value).subscribe((value:object)=>{
      this._vytvorSlovicko = JSON.stringify(value);
    });
  }
  public button_updateSlovicka():void{
    const filtrujese = this.filterEmptyFields(this.aktualizovatSlovicka.value)
    this.Slovicka.aktualizovatSlovicka(filtrujese).subscribe((value:object)=>{
      this._aktualizovatSlovicka = JSON.stringify(value);
    })
  }
  public button_smazatSlovicka():void{
    this.Slovicka.smazatSlovicka({id:this.inSmazatSlovicka.nativeElement.value}).subscribe((value:object)=>{
      this._smazatSlovicka = JSON.stringify(value);
    })
  }
  public ngOnInit():void{
    this.dBvsechnaSlovicka = false;
    this.dBvypisSlovicka = false;
    this.dBsmazatSlovicka = false;
  }
  private filterEmptyFields(data: any): any {
    let fields:any = {};
    Object.keys(data).forEach(key =>  data[key] != '' ? fields[key] = data[key] : key);
    return fields;   
  }
}
