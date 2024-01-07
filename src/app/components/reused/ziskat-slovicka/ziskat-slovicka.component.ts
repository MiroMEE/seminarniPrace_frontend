import { Component, Input } from '@angular/core';
import { Slovicka } from 'src/app/interface/slovicka';
import { SlovickaService } from 'src/app/services/slovicka.service';
@Component({
  selector: 'app-ziskat-slovicka',
  templateUrl: './ziskat-slovicka.component.html',
  styleUrls: ['./ziskat-slovicka.component.scss'],
})
export class ZiskatSlovickaComponent {
  @Input() vybranaSlovicka:Array<Slovicka> = [];
  public slovicka:Array<Slovicka> = [];
  tabulka_nastav:string[] = [
    'name','idsSlovicek','jazyk'
  ];
  constructor(private slovicka_ser:SlovickaService){};
  
  ngOnInit():void{
    this.getSlovickaAll();
    console.log(this.vybranaSlovicka)
  }
  public getSlovickaAll(){
    this.slovicka_ser.vsechnaSlovicka().subscribe((value:Array<Slovicka>)=>{
      this.slovicka = value;
    });
  }
}
