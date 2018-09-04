import { Component, AfterViewInit } from '@angular/core';
import { FormioAppConfig } from 'angular-formio';
import { PrismService } from '../Prism.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  constructor(
    public config: FormioAppConfig,
    public prism: PrismService
  ) {}

  ngAfterViewInit() {
    this.prism.init();
  }
}
