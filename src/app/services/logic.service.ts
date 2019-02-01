import { Injectable } from '@angular/core';
import { DocumentWrapperService } from './document-wrapper.service';
import { DocumentWrapper2Service } from './document-wrapper2.service';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  constructor(private documentWrapperService: DocumentWrapperService, private documentWrapper2Service: DocumentWrapper2Service) { }

  public isApple(): boolean {
    const vendor: string = this.documentWrapperService.getVendor();
    if(vendor.match(/apple/i)) {
      return true;
    }
    else {
      return false;
    }
  }

  public isApple2(): boolean {
    const vendor: string = this.documentWrapper2Service.getVendor();
    if(vendor.match(/apple/i)) {
      return true;
    }
    else {
      return false;
    }
  }
}
