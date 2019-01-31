import { Injectable } from '@angular/core';
import { DocumentWrapperService } from './document-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  constructor(private documentWrapperService: DocumentWrapperService) { }

  public isApple(): boolean {
    const vendor: string = this.documentWrapperService.getVendor();
    if(vendor.match(/apple/i)) {
      return true;
    }
    else {
      return false;
    }
  }
}
