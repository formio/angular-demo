import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { FormioModule } from '@formio/angular';
import { FormioAuth, FormioAuthRoutes } from '@formio/angular/auth';

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
