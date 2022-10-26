import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ButtonComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginPageComponent,
    ButtonComponent
  ]
})
export class LoginModule { }
