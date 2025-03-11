import { Component } from '@angular/core';
import { FormioResourceViewComponent } from '@formio/angular/resource';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'],
    standalone: false
})
export class ViewComponent extends FormioResourceViewComponent {}
