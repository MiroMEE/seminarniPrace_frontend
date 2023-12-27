import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  links = [
    {route:"home", title:"Domů"},
    {route:"hry",title:"Procvičování"},
    {route:"slovicka",title:"Editace slovíček"},
    {route:"uzivatel",title:"Uživatel"},
    {route:"mistnosti",title:"Místnosti"}
  ]
}
