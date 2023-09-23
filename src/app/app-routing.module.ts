import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SlovickaComponent } from './components/slovicka/slovicka.component';
import { TeorieComponent } from './components/teorie/teorie.component';
import { UzivatelComponent } from './components/uzivatel/uzivatel.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"home",component: HomeComponent,title:"Hlavní stránka"},
  {path:"slovicka",component: SlovickaComponent,title:"Slovíčka"},
  {path:"teorie",component: TeorieComponent,title:"Teorie"},
  {path:"uzivatel",component: UzivatelComponent,title:"Uživatel"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
