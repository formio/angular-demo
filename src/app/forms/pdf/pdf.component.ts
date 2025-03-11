import { Component, OnInit } from '@angular/core';
import { FormioAppConfig } from '@formio/angular';
@Component({
    selector: 'app-pdf',
    templateUrl: './pdf.component.html',
    styleUrls: ['./pdf.component.scss'],
    standalone: false
})
export class PdfComponent implements OnInit {
  constructor(public config: FormioAppConfig) {}
  ngOnInit() {}
}
