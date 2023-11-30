import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenicService } from 'src/app/services/menic.service';
import { SlovickaService } from 'src/app/services/slovicka.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-hry',
  templateUrl: './hry.component.html',
  styleUrls: ['./hry.component.scss']
})
export class HryComponent {
  gameMode = new FormControl('');
  slovicka:any = []
  constructor(
    private slov:SlovickaService,
    private menic:MenicService,
    private route:Router
  ){}
  public modes:string[] = [
    "kostky","skatulata"
  ]
  public tabulka1_nastaveni:string[] = [
    'name','idsSlovicek'
  ];
  public disabledButtons:any = [0,2];
  public vsechna_slovicka:any;
  public list2_seznamSlovicek:any = [];

  public posliDoSeznamu(id:string):void{
    this.slov.vypsatSlovicko(id).subscribe((value:unknown)=>{
      this.list2_seznamSlovicek.push(value);
      this.slovicka.push(id);
    }
    )
  };
  private vsechnaSlovicka():void{
    this.slov.vsechnaSlovicka().subscribe((value:any)=>{
      this.vsechna_slovicka = value;
    });
  }
  public ngOnInit():void{
    this.vsechnaSlovicka()
  }

  public pokracuj():void{
    const setting = {
      gameMode:this.gameMode.value,
      slovicka:this.slovicka
    }
    this.menic.vytvoritHru(setting).subscribe((value:any)=>{
      this.route.navigate(["hry/"+value.gameMode+"/"+value._id]);    
    });
  }
}
