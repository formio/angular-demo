import { Component, AfterViewInit } from '@angular/core';
import { PrismService } from '../../Prism.service';

@Component({
    selector: 'app-renderer',
    templateUrl: './renderer.component.html',
    styleUrls: ['./renderer.component.scss'],
    standalone: false
})
export class RendererComponent implements AfterViewInit {

  constructor(public prism: PrismService) { }
  ngAfterViewInit() {
    this.prism.init();
  }

}
