import { Component, AfterViewInit } from '@angular/core';
import { PrismService } from '../../Prism.service';
import { FormioComponent } from '@formio/angular';

@Component({
    selector: 'app-renderer',
    templateUrl: './renderer.component.html',
    styleUrls: ['./renderer.component.scss'],
    imports: [FormioComponent]
})
export class RendererComponent implements AfterViewInit {

  constructor(public prism: PrismService) { }
  ngAfterViewInit() {
    this.prism.init();
  }

}
