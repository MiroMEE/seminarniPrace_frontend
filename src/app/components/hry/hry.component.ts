import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenicService } from 'src/app/services/menic.service';
import { SlovickaService } from 'src/app/services/slovicka.service';

@Component({
  selector: 'app-hry',
  templateUrl: './hry.component.html',
  styleUrls: ['./hry.component.scss']
})
export class HryComponent {
  constructor(private slov:SlovickaService, private menic:MenicService, private route:Router){}
  public modes:string[] = [
    "kostky","skatulata"
  ]
  public _slovicka:any;
  public _seznamSlovicek:any = [];
  public settings:any = {
    slovicka:[],
    gameMode:"none",
    name:"undefined"
  }
  public posliDoSeznamu(id:string):void{
    this.slov.vypsatSlovicko(id).subscribe((value:unknown)=>{
      this._seznamSlovicek.push(value);
      this.settings.slovicka.push(id);
    }
    )
  };
  private vsechnaSlovicka():void{
    this.slov.vsechnaSlovicka().subscribe((value:any)=>{
      this._slovicka = value;
    });
  }
  public ngOnInit():void{
    this.vsechnaSlovicka()
  }
  public zjisti(){
    const nastaveni = this.settings
    if(nastaveni.gameMode=="none" || nastaveni.slovicka.length == 0){
      return true;
    }
    return false;
  }
  public pokracuj():void{
    console.log("Старт",this.settings);
    this.menic.vytvoritHru(this.settings).subscribe((value:any)=>{
      console.log(value);
      this.route.navigate(["hry/"+value.gameMode+"/"+value._id]);    
    });
  }
}
