import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-prihlaseni',
  templateUrl: './prihlaseni.component.html',
  styleUrls: ['./prihlaseni.component.scss'],
  standalone:true,
  imports:[ReactiveFormsModule,MatFormFieldModule,MatInputModule,CommonModule,MatButtonModule]
})
export class PrihlaseniComponent {
  hide = true;

  constructor(private auth:AuthService,private formbuilder:FormBuilder, private route:Router){
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required]);

  loginForm = this.formbuilder.group({
    email:this.email,
    password:this.password
  });

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
      this.error = "email nebo heslo je špatně!";
    } else{
      this.error = "chyba na straně serveru";
    }
  }

  onSubmit():void{
    if(this.loginForm.valid)
    this.auth.prihlasitUzivatele(this.loginForm.value).subscribe({
        next:value => window.location.reload(),
        error:err => this.showError(err.status)
    });
  }

}
