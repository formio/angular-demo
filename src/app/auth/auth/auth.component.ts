import { Component } from '@angular/core';
import { FormioAuthComponent, FormioAuthService } from '@formio/angular/auth';
@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    standalone: false
})
export class AuthComponent extends FormioAuthComponent {
  constructor(public service: FormioAuthService) {
    super();
  }
}
