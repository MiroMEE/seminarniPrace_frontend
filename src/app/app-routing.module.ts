import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SlovickaComponent } from './components/slovicka/slovicka.component';
import { UzivatelComponent } from './components/uzivatel/uzivatel.component';
import { HryComponent } from './components/hry/hry.component';
import { SkatulataComponent } from './components/hry/skatulata/skatulata.component';
import { MistnostiComponent } from './components/mistnosti/mistnosti.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"home",component: HomeComponent,title:"Hlavní stránka"},
  {path:"slovicka",component: SlovickaComponent,title:"Slovíčka"},
  {path:"uzivatel",component: UzivatelComponent,title:"Uživatel"},
  {path:"hry",component:HryComponent,title:"The Winner Takes It All!"},
  {path:"hry/skatulata",component:SkatulataComponent,title:"Skatulata"},
  {path:"hry/skatulata/:id",component:SkatulataComponent},
  {path:"mistnosti",component:MistnostiComponent,title:"Více hráčů"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
