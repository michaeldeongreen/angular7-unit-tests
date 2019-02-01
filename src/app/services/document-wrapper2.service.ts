import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DocumentWrapper2Service {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  public getVendor(): string {
    return this.document.defaultView.navigator.vendor;
  }
}
