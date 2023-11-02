import { Component } from '@angular/core';
import { SlovickaService } from 'src/app/services/slovicka.service';

@Component({
  selector: 'app-hry',
  templateUrl: './hry.component.html',
  styleUrls: ['./hry.component.scss']
})
export class HryComponent {
  constructor(private slov:SlovickaService){}
  public modes:string[] = [
    "kostky","škatulata"
  ]
  public _slovicka:any;
  public settings:any = {
    seznamSlovicek:[],
    gameMode:"none",
  }
  public posliDoSeznamu(id:string):void{
    this.slov.vypsatSlovicko(id).subscribe((value:unknown)=>{
      this.settings.seznamSlovicek.push(value);
    }
  )};
  private vsechnaSlovicka():void{
    this.slov.vsechnaSlovicka().subscribe((value:any)=>{
      this._slovicka = value;
    });
  }
  public ngOnInit():void{
    this.vsechnaSlovicka()
  }
  zjisti(){
    const nastaveni = this.settings
    if(nastaveni.gameMode=="none" || nastaveni.seznamSlovicek.length == 0){
      return true;
    }
    return false;
  }
  pokracuj():void{
    console.log("REDIRECTING",this.settings)
  }
}
