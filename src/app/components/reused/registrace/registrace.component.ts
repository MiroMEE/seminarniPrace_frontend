import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PrihlasovaniService } from 'src/app/services/prihlasovani.service';

@Component({
  selector: 'app-registrace',
  templateUrl: './registrace.component.html',
  styleUrls: ['./registrace.component.scss'],
  standalone:true,
  imports:[ReactiveFormsModule,MatFormFieldModule,CommonModule]

})
export class RegistraceComponent {
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
  constructor(private prihlasovaniService:PrihlasovaniService,private formbuilder:FormBuilder){
  }
  registrovani = this.formbuilder.group({
    name:this.name,
    email:this.email,
    password:this.password
    
  })

  registrovat():void{
    this.prihlasovaniService.registrovatUzivatele(this.registrovani.value).subscribe((end_value:any)=>{
      console.log(end_value);
    });
  }
}
