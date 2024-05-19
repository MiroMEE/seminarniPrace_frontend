import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MenicService } from 'src/app/services/menic.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SlovickaId, SlovickaReady } from 'src/app/interface/slovicka';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ZiskatSlovickaComponent } from '../../reused/ziskat-slovicka/ziskat-slovicka.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@Component({
  selector: 'app-procvicovani',
  templateUrl: './procvicovani.component.html',
  styleUrls: ['./procvicovani.component.scss'],
  standalone:true,
  imports:[MatTabsModule,MatButtonModule,ReactiveFormsModule,MatListModule,ZiskatSlovickaComponent,MatButtonToggleModule,CommonModule],
  providers:[]
})
// chyba broser animations module
export class ProcvicovaniComponent {

  slovicka:Array<SlovickaReady> = [];
  arr_slovickoId:Array<SlovickaId> = [];
  gameMode = new FormControl('');
  
  constructor(
    private menic:MenicService,
    private route:Router,
  ){}
  public modes:string[] = [
    "skatulata"
  ]
  public disabledButtons:any = [0,2];
  public list2_seznamSlovicek:any = [];

  public pokracuj():void{
    const setting = {
      gameMode:this.gameMode.value,
      slovicka:this.arr_slovickoId,
      players:[],
      name:"neni urcen nazev",
      hosted:"neni zatim urceno jmeno"
    }
    this.menic.vytvoritHru(setting).subscribe((value:any)=>{
      this.route.navigate(["hry/"+value.gameMode+"/"+value._id]);    
    });
  }
}
