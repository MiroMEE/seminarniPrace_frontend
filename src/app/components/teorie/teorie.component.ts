import { Component, ElementRef, ViewChild } from '@angular/core';
import { TeorieService } from 'src/app/services/teorie.service';
import { FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-teorie',
  templateUrl: './teorie.component.html',
  styleUrls: ['./teorie.component.scss']
})
export class TeorieComponent {
  
  constructor(private Teorie:TeorieService, private formbuilder:FormBuilder){}
  
  //input
  @ViewChild('inVypisTeorie') public inVypisTeorie!: ElementRef;
  @ViewChild('smazatTeorii') public smazatTeorii!: ElementRef;

  //vypis - string
  public vytvorUzivatele:string = "Vytvoř uživatele (name,teorie_json)!";
  public vsechnaTeorie:string = "Zmáčkni, pro vypsání všech teorii!";
  public vypisTeorie:string = "Napiš id teorie!";
  public aktualizovatTeorii:string = "Aktualizuj teorii!";
  public smazatTeorie:string = "Smazat teorii!";

  // disabled button
  public dBvsechnaTeorie:boolean = true;
  public dBvypisTeorie:boolean = true;
  public dBsmazatTeorie:boolean = true;

  // Formuláře
  public vytvareniUzivatele = this.formbuilder.group({
    name: '',
    teorie_json: ''
  });
  public aktualizovatUzivatele = this.formbuilder.group({
    id: '',
    name: '',
    teorie_json: ''
  })
  //methods
  public button_vsechnaTeorie():void{
    this.dBvsechnaTeorie = true;
    this.Teorie.vsechnaTeorie().subscribe((value:object[])=>{
      this.vsechnaTeorie = JSON.stringify(value);
    })
  }
  public button_vypisTeorii():void{
    const hodnota = this.inVypisTeorie.nativeElement
    this.Teorie.vypsatTeorii(hodnota.value).subscribe((value:object)=>{
      hodnota.value = "";
      hodnota.parentNode.parentNode.style.backgroundColor = "green";
      this.vypisTeorie = JSON.stringify(value);
      this.dBvypisTeorie = true;
    });
  }
  public button_vytvorUzivatele():void{
    this.Teorie.poslatJSON(this.vytvareniUzivatele.value).subscribe((value:object)=>{
      this.vytvorUzivatele = JSON.stringify(value);
    });
  }
  public button_updateUzivatele():void{
    const filtrujese = this.filterEmptyFields(this.aktualizovatUzivatele.value)
    this.Teorie.aktualizovatTeorii(filtrujese).subscribe((value:object)=>{
      this.aktualizovatTeorii = JSON.stringify(value);
    })
  }
  public button_smazatTeorii():void{
    this.Teorie.smazatTeorii({id:this.smazatTeorii.nativeElement.value}).subscribe((value:object)=>{
      this.smazatTeorie = JSON.stringify(value);
    })
  }
  public ngOnInit():void{
    this.dBvsechnaTeorie = false;
    this.dBvypisTeorie = false;
    this.dBsmazatTeorie = false;
  }
  private filterEmptyFields(data: any): any {
    let fields:any = {};
    Object.keys(data).forEach(key =>  data[key] != '' ? fields[key] = data[key] : key);
    return fields;   
  }
}
