import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentWrapperService {

  constructor(@Inject('DOCUMENT') private document: Document) { }

  public getVendor(): string {
    return this.document.defaultView.navigator.vendor;
  }
}
