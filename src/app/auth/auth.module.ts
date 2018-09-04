import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { FormioModule } from 'angular-formio';
import { FormioAuth, FormioAuthRoutes } from 'angular-formio/auth';

export const authRoutes = FormioAuthRoutes({
  auth: AuthComponent,
  login: LoginComponent
});

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioAuth,
    RouterModule.forChild(authRoutes)
  ],
  declarations: [AuthComponent, LoginComponent]
})
export class AuthModule { }
