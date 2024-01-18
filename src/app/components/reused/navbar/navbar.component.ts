import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone:true,
  imports:[MatButtonModule,CommonModule,RouterLink]
})
export class NavbarComponent {
  constructor(){}
  links:any = []
  ngOnInit(){
    this.linkch()
  }
  linkch(){
    if(this.loggedIn){
      this.links = [
        {route:"home", title:"Domů"},
        {route:"hry",title:"Procvičování"},
        {route:"editor",title:"Editace slovíček"},
        {route:"mistnosti",title:"Místnosti"}
      ]
    } else{
      this.links = [
        {route:"home", title:"Domů"},
        {route:"hry",title:"Procvičování"},
        {route:"uzivatel",title:"Uživatel"},
      ]

    }
  }
  odhlasitse(){
    localStorage.removeItem("id");
    this.linkch();
  }
  get loggedIn():boolean{
    return localStorage.getItem("id")!=null ? true : false;
  }
}
