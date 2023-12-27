import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {io} from "socket.io-client";
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  socket: any;
  readonly url: string = "http://localhost:3010";
  constructor() {
    this.socket = io(this.url);
  }

  listen(eventName: string){
    return new Observable((subscriber)=>{
      this.socket.on(eventName,(data:any)=>{
        subscriber.next(data);
      })
    })
  }

  emit(eventName:string,data: any){
    this.socket.emit(eventName, data);
  }

  start(number:number){
    this.emit("c_start",number);
    return true
  }

  pripojitServer(name:string,number:number){
    if(name=="") return false;
    this.emit("c_pripojitServer",{name:name,number:number});
    return true;
  }

  vyhledatServers(name:string){
    if(name=="") return false;
    this.emit("c_vyhledatServers",name);
    return true;
  }
  vytvorServer(data:object):boolean{
    const check = (data:any):boolean=>{
      if(data.name=="") return false;
      if(data.master=="") return false;
      if(data.game=="") return false;
      return true;
    }
    if(check(data)){
      this.emit("c_vytvorServer",data);
      return true;
    } else{
      console.log("Failed");
      return false
    }
  }
}
