import { Component } from '@angular/core';
import { FormioResourceViewComponent } from '@formio/angular/resource';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'],
    imports: [RouterLink, DatePipe]
})
export class ViewComponent extends FormioResourceViewComponent {}
