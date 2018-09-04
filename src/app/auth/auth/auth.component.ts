import { Component } from '@angular/core';
import { FormioAuthComponent, FormioAuthService } from 'angular-formio/auth';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent extends FormioAuthComponent {
  constructor(public service: FormioAuthService) {
    super();
  }
}
