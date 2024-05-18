import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrace',
  templateUrl: './registrace.component.html',
  styleUrls: ['./registrace.component.scss'],
  standalone:true,
  imports:[ReactiveFormsModule,MatFormFieldModule,MatInputModule,CommonModule,MatButtonModule]

})
export class RegistraceComponent {
  hide = true;

  constructor(private auth:AuthService,private formbuilder:FormBuilder, private route:Router){
  }

  username = new FormControl('',[Validators.required, Validators.max(10)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required]);

  registerForm = this.formbuilder.group({
    username:this.username,
    email:this.email,
    password:this.password
  });

  getNameErrorMessage(){
    return this.username.hasError('required') ? 'Zadejte svoje jméno' : ''
  }
  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Zadejte svůj email.';
    }
    return this.email.hasError('email') ? 'Špatný formát emailu' : '';
  }
  getPasswordErrorMessage(){
    if(this.password.hasError('required')){
      return 'Zadejte svoje heslo';
    }
    return '';
  }
  error:string = '';
  showError(status:number){
    if(status == 403){
      this.error = "jméno/email už existuje!";
    } else{
      this.error = "chyba na straně serveru";
    }
  }
  potvrzeno:boolean = false;
  onSubmit():void{
    if(this.registerForm.valid){
      this.auth.registrovatUzivatele(this.registerForm.value).subscribe({
        next: value => {
          this.potvrzeno=true;
        },
        error: err => this.showError(err.status)
      });
    }
  }
}
