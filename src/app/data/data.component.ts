import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormioAppConfig } from 'angular-formio';
import { FormioAuthService } from 'angular-formio/auth';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataComponent implements OnInit {
  constructor(public auth: FormioAuthService, public config: FormioAppConfig) {}
  ngOnInit() {
  }
}
