import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FormioAppConfig } from '@formio/angular';
import { FormioAuthService } from '@formio/angular/auth';
import SubmissionComponents from './submission/index';
import { PrismService } from '../Prism.service';
import { FormioGridComponent } from '@formio/angular/grid';
@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [FormioGridComponent]
})
export class DataComponent implements AfterViewInit {

  public components = SubmissionComponents;

  constructor(
      public auth: FormioAuthService,
      public config: FormioAppConfig,
      public prism: PrismService
  ) {}

  ngAfterViewInit() {
    this.prism.init();
  }
}
