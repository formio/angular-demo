import { Component } from '@angular/core';
import { FormioAuthService } from '@formio/angular/auth';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  constructor(public auth: FormioAuthService) {}
}
