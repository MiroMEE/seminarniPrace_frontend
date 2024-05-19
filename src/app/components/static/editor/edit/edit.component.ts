import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { slovicko } from 'src/app/interface/slovicka';
import { SlovickaService } from 'src/app/services/slovicka.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  standalone:true,
  imports:[CommonModule,MatInputModule,MatButtonModule]
})
export class EditComponent {
  @Input() slovicka:Array<slovicko> = [];
  @Output() slovickaChange = new EventEmitter<Array<slovicko>>();
  
  slovicko_input:boolean = false; // ukládá, jestli mění se slovíčko [přidává, upravuje]
  slovicko_input_arr:number = 0; // ukládá si data
  constructor(private Slovicka_serv:SlovickaService){}

  slovickoAdd(first?:string,second?:string):void{
    const slov:slovicko = typeof first!=='undefined' && typeof second!=='undefined' ? {first:first,second:second} : {first:"",second:""}; 
    this.slovicka.push(slov);
  }
  firstButtonPressed(first: string,second: string): void{
    this.slovicko_input = !this.slovicko_input;
    this.slovicka[this.slovicko_input_arr] = {first:first,second:second}
  }
  secondButtonPressed(): void{
    this.slovicko_input = !this.slovicko_input;
    this.slovicka.splice(this.slovicko_input_arr,1)
  }
}
