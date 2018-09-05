import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormManagerIndexComponent, FormManagerService, FormManagerConfig } from 'angular-formio/manager';
import { FormioAuthService } from 'angular-formio/auth';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent extends FormManagerIndexComponent {
  constructor(
    public auth: FormioAuthService,
    public service: FormManagerService,
    public route: ActivatedRoute,
    public router: Router,
    public config: FormManagerConfig
  ) {
    super(service, route, router, config);
  }
}
