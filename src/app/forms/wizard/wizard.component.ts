import { Component, AfterViewInit } from '@angular/core';
import { FormioAppConfig } from '@formio/angular';
import { PrismService } from '../../Prism.service';

@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.scss'],
    standalone: false
})
export class WizardComponent implements AfterViewInit {
  constructor(
    public config: FormioAppConfig,
    public prism: PrismService
  ) {}

  ngAfterViewInit() {
    this.prism.init();
  }
}
