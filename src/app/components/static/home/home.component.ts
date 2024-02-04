import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true,
  imports:[MatGridListModule,RouterLink,CommonModule]
})
export class HomeComponent {
  constructor(private auth:AuthService){}

  links:Array<{name:string,url:string}> = [];
  refresh():void{
    if(this.auth.isLoggedIn()){
      this.links = [
        {name:"Procvičování",url:"hry"},
        {name:"Editor slovíček",url:"editor"},
        {name:"Místnosti",url:"mistnosti"}];
    } else{
      this.links = [
        {name:"Procvičování",url:"procvicovani"},
        {name:"Uživatel",url:"uzivatel"}];
    }
  }
  ngOnInit():void{
    this.refresh()
  }
}
