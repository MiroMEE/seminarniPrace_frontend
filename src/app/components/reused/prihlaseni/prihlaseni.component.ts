import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { PrihlasovaniService } from 'src/app/services/prihlasovani.service';
@Component({
  selector: 'app-prihlaseni',
  templateUrl: './prihlaseni.component.html',
  styleUrls: ['./prihlaseni.component.scss'],
  standalone:true,
  imports:[ReactiveFormsModule,MatFormFieldModule,CommonModule]
})
export class PrihlaseniComponent {
  
  hide = true;

  name = new FormControl('',[Validators.required, Validators.max(10)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required])

  getNameErrorMessage(){
    this.name.hasError('required') ? 'Zadejte svoje jméno' : ''
  }
  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Zadejte svůj email.';
    }
    return this.email.hasError('email') ? 'Špatný formát emailu' : '';
  }
  getPasswordErrorMessage(){
    if(this.password.hasError('required')){
      return 'Zadejte svoje heslo'
    }
    return ''
  }
  constructor(private prihlasovaniService:PrihlasovaniService,private formbuilder:FormBuilder, private route:Router){
  }
  prihlaseni = this.formbuilder.group({
    email:this.email,
    password:this.password
  })
  prihlasit():void{
    this.prihlasovaniService.prihlasitUzivatele(this.prihlaseni.value).subscribe((end_value:any)=>{
      console.log(end_value) // spravit chyba 
      localStorage.setItem("id",end_value.id);
      return window.location.reload();
    });
  }

}
