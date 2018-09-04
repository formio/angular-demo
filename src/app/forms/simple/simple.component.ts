import { Component, AfterViewInit } from '@angular/core';
import { FormioAppConfig } from 'angular-formio';
import { PrismService } from '../../Prism.service';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
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
