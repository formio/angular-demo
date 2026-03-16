import { Component } from '@angular/core';
import { FormioAuthLoginComponent, FormioAuthService } from '@formio/angular/auth';
import { FormioComponent } from '@formio/angular';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [FormioComponent]
})
export class LoginComponent extends FormioAuthLoginComponent {
  constructor(public service: FormioAuthService) {
    super(service);
  }
}
