import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-prihlaseni',
  templateUrl: './prihlaseni.component.html',
  styleUrls: ['./prihlaseni.component.scss'],
  standalone:true,
  imports:[ReactiveFormsModule,MatFormFieldModule,MatInputModule,CommonModule]
})
export class PrihlaseniComponent {
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required])

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
  constructor(private auth:AuthService,private formbuilder:FormBuilder, private route:Router){
  }
  prihlaseni = this.formbuilder.group({
    email:this.email,
    password:this.password
  })
  prihlasit():void{
    this.auth.prihlasitUzivatele(this.prihlaseni.value).subscribe(
      {
        next:value => {
          console.log(value);
          // this.route.navigate(["/home"])
          
          },
        error:err => console.error(err)
    });
  }

}
