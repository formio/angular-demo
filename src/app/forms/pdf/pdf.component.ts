import { Component, OnInit } from '@angular/core';
import { FormioAppConfig } from 'angular-formio';
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
  constructor(public config: FormioAppConfig) {}
  ngOnInit() {}
}
