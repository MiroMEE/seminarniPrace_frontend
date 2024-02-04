import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SlovickaReady, slovicko } from 'src/app/interface/slovicka';
import { SlovickaService } from 'src/app/services/slovicka.service';
import { SlovickaEditComponent } from "../slovicka-edit/slovicka-edit.component";
import { ReactiveFormsModule } from '@angular/forms';



@Component({
    selector: 'app-slovicka-own',
    templateUrl: './slovicka-own.component.html',
    styleUrls: ['./slovicka-own.component.scss'],
    standalone: true,
    imports: [CommonModule, MatButtonModule, SlovickaEditComponent, ReactiveFormsModule]
})
export class SlovickaOwnComponent {
  id:string = "";
  slovickaEdit:Array<slovicko> = [];
  @Output() start_editing_emiter = new EventEmitter<boolean>();
  start_editing:boolean = false;
  addData(value:boolean){
    this.start_editing_emiter.emit(value);
  }
  constructor(private Slovicka_serv:SlovickaService){}

  svojeSlovicka: Array<SlovickaReady> = [];

  smazatCelaSlovicka(id:string):void{
    this.Slovicka_serv.smazatSlovicka(id).subscribe({
      next: value => {
        this.ziskatSvojeSlovicka();
      },
      error: err => console.error('Observable error button_smazatSlovicka: '+err)
    });
  }
  ziskatSvojeSlovicka():void{
    this.Slovicka_serv.svojeSlovicka().subscribe({
      next: value => this.svojeSlovicka = value,
      error: err => console.error('Observable error vsechnaSlovicka: '+err)
    });
  }
  ziskatDataSlovicka(id:string): void{
    this.start_editing = true;
    this.Slovicka_serv.vypsatSlovicko(id).subscribe({
      next: value => {
        this.slovickaEdit = JSON.parse(value.slovicka_json);
        this.id = id;
      },
      error: err => console.error('Observable error vytvor_aktualizuj: '+err)
    });
  }
  aktualizujCelaSlovicka():void{
    const slovicka_json = JSON.stringify(this.slovickaEdit);
    this.Slovicka_serv.aktualizovatSlovicka(this.id,slovicka_json).subscribe({
      next: value => {
        // this.reset();
      },
      error: err => console.error("Observable error button_updateSlovicka: "+err)
    });
  }
  ngOnInit():void{
    this.ziskatSvojeSlovicka();
  }

}
