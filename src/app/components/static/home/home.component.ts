import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

interface Items{
  name: string;
  url: string;
  podrobnosti: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true,
  imports:[RouterLink,CommonModule]
})


export class HomeComponent {

  constructor(private auth:AuthService){
  }
  
  public isLoggedIn:boolean = false;
  
  ngOnInit():void{
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  public nacistVyber(isLogged:boolean):Array<Items>{
    if(isLogged){
      return [
        {name:"Procvičování",url:"hry",podrobnosti:"Procvič si slovíčka!"},
        {name:"Editor slovíček",url:"editor",podrobnosti:"Vytvoř si svoje slovíčka!"},
        /*{name:"Místnosti",url:"mistnosti",podrobnosti:"-test-vícehráčů-"}*/];
    } else {
      return [
        {name:"Procvičování",url:"hry",podrobnosti:"Procvič si slovíčka zdarma!"},
        {name:"Uživatel",url:"uzivatel",podrobnosti:"Registrace nebo přihlášení"}];
    }
  }
}
