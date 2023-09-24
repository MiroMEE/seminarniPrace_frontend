import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PrihlasovaniService } from 'src/app/services/prihlasovani.service';

@Component({
  selector: 'app-uzivatel',
  templateUrl: './uzivatel.component.html',
  styleUrls: ['./uzivatel.component.scss']
})
export class UzivatelComponent {

  constructor(private prihlasovaniService:PrihlasovaniService,private formbuilder:FormBuilder){}

  prihlaseni = this.formbuilder.group({
    email:"",
    password:""
  })
  registrovani = this.formbuilder.group({
    name:"",
    email:"",
    password:""
  })
  prihlasit():void{
    this.prihlasovaniService.prihlasitUzivatele(this.prihlaseni.value).subscribe((end_value:any)=>{
      console.log(end_value);
    });
  }
  registrovat():void{
    this.prihlasovaniService.registrovatUzivatele(this.registrovani.value).subscribe((end_value:any)=>{
      console.log(end_value);
    });
  }
}
