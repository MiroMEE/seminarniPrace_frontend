import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrace',
  templateUrl: './registrace.component.html',
  styleUrls: ['./registrace.component.scss'],
  standalone:true,
  imports:[ReactiveFormsModule,MatFormFieldModule,MatInputModule,CommonModule]

})
export class RegistraceComponent {
  hide = true;

  username = new FormControl('',[Validators.required, Validators.max(10)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required]);

  getNameErrorMessage(){
    this.username.hasError('required') ? 'Zadejte svoje jméno' : ''
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
  constructor(private auth:AuthService,private formbuilder:FormBuilder){
  }
  
  registrovani = this.formbuilder.group({
    username:this.username,
    email:this.email,
    password:this.password
  });

  registrovat():void{
    console.log(this.registrovani.value);
    this.auth.registrovatUzivatele(this.registrovani.value).subscribe({
      next: value => console.log(value),
      error: err => console.log(err)
    });
  }
}
