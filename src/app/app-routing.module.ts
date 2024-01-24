import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/static/home/home.component';
import { EditorslovicekComponent } from './components/static/editorslovicek/editorslovicek.component';
import { UzivatelComponent } from './components/static/uzivatel/uzivatel.component';
import { ProcvicovaniComponent } from './components/static/procvicovani/procvicovani.component';
import { SkatulataComponent } from './components/hrani/skatulata/skatulata.component';
import { VicehracuMistnostComponent } from './components/static/vicehracu-mistnost/vicehracu-mistnost.component';
import { AuthorizeGuard } from './auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"home",component: HomeComponent,title:"Hlavní stránka"},
  {path:"editor",component: EditorslovicekComponent,title:"Editor slovíček",canActivate:[AuthorizeGuard]},
  {path:"uzivatel",component: UzivatelComponent,title:"Uživatel"},
  {path:"hry",component:ProcvicovaniComponent,title:"Procvičování slovíček"},
  {path:"hry/skatulata",component:SkatulataComponent,title:"Skatulata"},
  {path:"hry/skatulata/:id",component:SkatulataComponent, title:"Probíhá hra"},
  {path:"mistnosti",component:VicehracuMistnostComponent,title:"Místnost pro více hráčů"},
  {path:"**",redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
