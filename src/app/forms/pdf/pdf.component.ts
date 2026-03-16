import { Component, OnInit } from '@angular/core';
import { FormioAppConfig, FormioComponent } from '@formio/angular';
@Component({
    selector: 'app-pdf',
    templateUrl: './pdf.component.html',
    styleUrls: ['./pdf.component.scss'],
    imports: [FormioComponent]
})
export class PdfComponent implements OnInit {
  constructor(public config: FormioAppConfig) {}
  ngOnInit() {}
}
