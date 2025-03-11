import { FormioRefreshValue } from '@formio/angular';
import { Component, AfterViewInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { PrismService } from '../../Prism.service';

@Component({
    selector: 'app-builder',
    templateUrl: './builder.component.html',
    styleUrls: ['./builder.component.scss'],
    standalone: false
})
export class BuilderComponent implements AfterViewInit {
  @ViewChild('json', {static: true}) jsonElement?: ElementRef;
  @ViewChild('code', {static: true}) codeElement?: ElementRef;
  public form: Object;
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();
  constructor(public prism: PrismService) {
    this.form = {components: []};
  }

  onChange(event) {
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    this.refreshForm.emit({
      property: 'form',
      value: event.form
    });
  }

  ngAfterViewInit() {
    this.prism.init();
  }
}
