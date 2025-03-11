import { Component } from '@angular/core';
import { FormioAuthLoginComponent, FormioAuthService } from '@formio/angular/auth';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent extends FormioAuthLoginComponent {
  constructor(public service: FormioAuthService) {
    super(service);
  }
}
