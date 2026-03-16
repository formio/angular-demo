import { Component } from '@angular/core';
import { FormioAuthService } from '@formio/angular/auth';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterLink, RouterLinkActive, NgIf, RouterOutlet]
})
export class AppComponent {
  constructor(public auth: FormioAuthService) {}
}
