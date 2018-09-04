import { Component, AfterViewInit } from '@angular/core';
import { FormioAppConfig } from 'angular-formio';
import { PrismService } from '../../Prism.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
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
