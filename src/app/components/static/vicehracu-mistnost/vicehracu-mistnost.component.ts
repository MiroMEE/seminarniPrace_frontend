import { Component } from '@angular/core';
import { Mistnost } from 'src/app/interface/mistnost';
import { Slovicka } from 'src/app/interface/slovicka';
import { PrihlasovaniService } from 'src/app/services/prihlasovani.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ZiskatSlovickaComponent } from '../../reused/ziskat-slovicka/ziskat-slovicka.component';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vicehracu-mistnost',
  templateUrl: './vicehracu-mistnost.component.html',
  styleUrls: ['./vicehracu-mistnost.component.scss'],
  standalone:true,
  imports:[ZiskatSlovickaComponent,MatListModule,CommonModule]
})


export class VicehracuMistnostComponent {
  zobraz:string = ""

  voda:string = "";
  inRoom:boolean = false
  creator:boolean = false;
  refr:boolean = false;
  slovicka:Array<Slovicka> = [];
  slovicka_string:Array<string> = [];
  constructor(private socket:WebsocketService, private user:PrihlasovaniService){}
  current_user:string = "";
  server_name:string = "voda";
  servers:any = [];
  modes:string[] = ["testHra"]
  current_mode:string = "rizek";
  ngOnInit(){
    //automaticky
    this.user.ziskatUzivatele({id:localStorage.getItem("id")}).subscribe((value:any)=>{
      this.current_user = value;
    })
    this.socket.listen("s_servers").subscribe((value:any)=>{
      this.servers = value;
      console.log(value)
    });

    // pro připojení uživatele
    this.socket.listen("s_joined").subscribe((value:any)=>{
      this.button_vyhledatServers();
      this.zobraz = JSON.stringify(value);
    });

    // vytváření
    this.socket.listen("s_vytvorServer").subscribe((value:any)=>{
      this.button_vyhledatServers()
      this.zobraz = JSON.stringify(value)
    });
    this.socket.listen("s_start").subscribe((value:any)=>{
      this.button_vyhledatServers()
    });
  }
  button_vyhledatServers():void{
    this.socket.vyhledatServers();
  }
  button_pripojitServer(mistnost:number):void{
    this.socket.pripojitServer(this.current_user,mistnost);
    this.inRoom=true
  }
  button_vytvorServer():void{
    this.slovicka.forEach(value=>{
      this.slovicka_string.push(value._id);
    })
    let createServer:Mistnost = {
      name:this.server_name,
      slovicka:this.slovicka_string,
      gameMode:this.current_mode,
      hosted:this.current_user,
    }
    this.socket.vytvorServer(createServer);
  }
  button_start(cislo_roomky:number):void{
    this.socket.start(cislo_roomky);
  }
}
