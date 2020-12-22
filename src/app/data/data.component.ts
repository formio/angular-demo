import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FormioAppConfig } from '@formio/angular';
import { FormioAuthService } from '@formio/angular/auth';
import { PrismService } from '../Prism.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataComponent implements AfterViewInit {
  constructor(
      public auth: FormioAuthService,
      public config: FormioAppConfig,
      public prism: PrismService
  ) {}

  ngAfterViewInit() {
    this.prism.init();
  }
}
