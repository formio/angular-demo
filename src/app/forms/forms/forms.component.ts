import { Component, OnInit } from '@angular/core';
import { FORMS } from '../forms.index';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss'],
    standalone: false
})
export class FormsComponent implements OnInit {
  public forms: any[];
  constructor() {
    this.forms = FORMS.filter((item: any) => {
      return !!item.path;
    });
  }

  ngOnInit() {
  }
}
