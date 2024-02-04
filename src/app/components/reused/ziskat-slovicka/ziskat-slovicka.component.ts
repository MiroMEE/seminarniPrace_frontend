import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { SlovickaId, SlovickaReady } from 'src/app/interface/slovicka';
import { SlovickaService } from 'src/app/services/slovicka.service';
@Component({
  selector: 'app-ziskat-slovicka',
  templateUrl: './ziskat-slovicka.component.html',
  styleUrls: ['./ziskat-slovicka.component.scss'],
  standalone:true,
  imports:[MatTableModule,MatButtonModule]
})
export class ZiskatSlovickaComponent {
  @Input() vybranaSlovicka:Array<SlovickaReady> = [];
  @Input() vybranaSlovickaIds:Array<SlovickaId> = [];
  
  constructor(private slovicka_ser:SlovickaService){};
  public slovicka:Array<SlovickaReady> = [];

  public tabulka_nastav:string[] = [
    'name','idsSlovicek','jazyk'
  ];

  public getSlovickaAll(){
    this.slovicka_ser.vsechnaSlovicka().subscribe({
      next: value => this.slovicka = value,
      error: err => console.error('Observable getSlovickaAll: '+err)
    })
  }
  ngAfterViewInit():void{
    this.getSlovickaAll();
  }
}
