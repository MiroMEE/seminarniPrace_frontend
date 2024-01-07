import { Component } from '@angular/core';
import { Mistnost } from 'src/app/interface/mistnost';
import { Slovicka } from 'src/app/interface/slovicka';
import { PrihlasovaniService } from 'src/app/services/prihlasovani.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-vicehracu-mistnost',
  templateUrl: './vicehracu-mistnost.component.html',
  styleUrls: ['./vicehracu-mistnost.component.scss']
})


export class VicehracuMistnostComponent {
  creator:boolean = false;
  slovicka:Array<Slovicka> = [];
  slovicka_string:Array<string> = [];
  constructor(private socket:WebsocketService, private user:PrihlasovaniService){}
  current_user:string = "";
  server_name:string = "";
  current__players:string[] = [];
  servers:any = [];
  modes:string[] = ["testHra"]
  current_mode:string = "";
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
      this.button_vyhledatServers()
      this.current__players.push(value.name)
    });

    // vytváření
    this.socket.listen("s_vytvorServer").subscribe((value:any)=>{
      this.button_vyhledatServers()
    });
    this.socket.listen("s_start").subscribe((value:any)=>{
      this.button_vyhledatServers()
    });
  }
  button_vyhledatServers():void{
    this.socket.vyhledatServers(this.current_user);
  }
  button_pripojitServer(mistnost:number):void{
    this.socket.pripojitServer(this.current_user,1); // třeba získat číslo roomky
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
  button_start():void{
    this.socket.start(1); // třeba získat číslo roomky
  }
}
