import { Component, OnInit } from '@angular/core';
import { FormRoutes } from '../forms.module';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public forms: any[];
  constructor() {
    this.forms = FormRoutes[0].children.filter((item: any) => {
      return !!item.path;
    });
  }

  ngOnInit() {
  }
}
