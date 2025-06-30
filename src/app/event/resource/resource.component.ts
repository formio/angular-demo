import { Component } from '@angular/core';
import { FormioResourceComponent } from '@formio/angular/resource';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-resource',
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.scss'],
    imports: [RouterLink, RouterLinkActive, RouterOutlet]
})
export class ResourceComponent extends FormioResourceComponent {}
