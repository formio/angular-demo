import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PrismService } from '../../Prism.service';
import { options } from './options';
import {Observable, Subject} from "rxjs";

@Component({
    selector: 'app-builder',
    templateUrl: './builder.component.html',
    standalone: false
})
export class CustomBuilderComponent implements AfterViewInit {
  @ViewChild('json', {static: true}) jsonElement?: ElementRef;
  @ViewChild('code', {static: true}) codeElement?: ElementRef;
  public form: Object;
  public options: any;
  public language: string;
  public rebuildEmitter: Subject<void> = new Subject<void>();

  constructor(public prism: PrismService) {
    this.options = options;
    this.form = {components: []};
  }

  onChange(event) {
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
  }

  ngAfterViewInit() {
    this.prism.init();
  }

  changeLanguage(language: string) {
    this.language = language;
    this.options.language = this.language;
    this.rebuildEmitter.next(this.options);
  }
}
