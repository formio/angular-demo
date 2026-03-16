import { Component } from '@angular/core';
import { FormioAuthComponent, FormioAuthService } from '@formio/angular/auth';
import { NgIf } from '@angular/common';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    imports: [NgIf, RouterLinkActive, RouterLink, RouterOutlet]
})
export class AuthComponent extends FormioAuthComponent {
  constructor(public service: FormioAuthService) {
    super();
  }
}
