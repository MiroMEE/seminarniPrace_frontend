import { Component } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-mistnosti',
  templateUrl: './mistnosti.component.html',
  styleUrls: ['./mistnosti.component.scss']
})
export class MistnostiComponent {
  constructor(private socket:WebsocketService){}

  data:object = {
    name:"pojdHrat",
    master:"standa",
    game:"kostka"
  }

  ngOnInit(){
    this.socket.listen("s_servers").subscribe((value:any)=>{
      console.log(value);
    });
    this.socket.listen("s_failed_name").subscribe((value:any)=>{
      console.log(value);
    });
    this.socket.listen("s_joined").subscribe((value:any)=>{
      console.log(value);
    });
    this.socket.listen("s_vytvorServer").subscribe((value:any)=>{
      console.log(value);
    });
    this.socket.listen("s_start").subscribe((value:any)=>{
      console.log(value);
    });
  }
  button_vyhledatServers():void{
    this.socket.vyhledatServers("standa");
  }
  button_pripojitServer():void{
    this.socket.pripojitServer("standa",1); // třeba získat číslo roomky
  }
  button_vytvorServer():void{
    this.socket.vytvorServer(this.data);
  }
  button_start():void{
    this.socket.start(1); // třeba získat číslo roomky
  }
}
