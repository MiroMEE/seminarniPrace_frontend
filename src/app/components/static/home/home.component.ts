import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


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

  public nacistVyber(isLogged:boolean):Array<{name:string, url:string}>{
    if(isLogged){
      return [
        {name:"Procvičování",url:"hry"},
        {name:"Editor slovíček",url:"editor"},
        {name:"Místnosti",url:"mistnosti"}];
    } else {
      return [
        {name:"Procvičování",url:"hry"},
        {name:"Uživatel",url:"uzivatel"}];
    }
  }
}
