import { Component, AfterViewInit } from '@angular/core';
import { FormioAppConfig } from '@formio/angular';
import { PrismService } from '../../Prism.service';

@Component({
    selector: 'app-simple',
    templateUrl: './simple.component.html',
    styleUrls: ['./simple.component.scss'],
    standalone: false
})
export class SimpleComponent implements AfterViewInit {
  constructor(
    public config: FormioAppConfig,
    public prism: PrismService
  ) {}
  ngAfterViewInit() {
    this.prism.init();
  }
}
