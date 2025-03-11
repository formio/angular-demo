import { Component } from '@angular/core';
import { FormioResourceComponent } from '@formio/angular/resource';

@Component({
    selector: 'app-resource',
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.scss'],
    standalone: false
})
export class ResourceComponent extends FormioResourceComponent {}
