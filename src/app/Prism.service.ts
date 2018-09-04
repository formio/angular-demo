import { Injectable } from '@angular/core';
declare var Prism: any;

@Injectable()
export class PrismService {
  init() {
    Prism.highlightAll();
  }
}
