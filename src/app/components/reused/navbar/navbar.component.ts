import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone:true,
  imports:[MatButtonModule,CommonModule,RouterLink]
})
export class NavbarComponent {
  constructor(private auth:AuthService){}
  links:any = [""];
  loggedIn:boolean = this.auth.isLoggedIn();
  ngOnInit(){
    this.linkch()
  }
  linkch(){
    this.loggedIn = this.auth.isLoggedIn();
    if(this.auth.isLoggedIn()){
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
    this.auth.logout();
    this.linkch();
  }
}
