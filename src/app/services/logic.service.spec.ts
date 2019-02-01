import { TestBed } from '@angular/core/testing';

import { LogicService } from './logic.service';
import { DocumentWrapperService } from './document-wrapper.service';
import { DocumentWrapper2Service } from './document-wrapper2.service';
import { DOCUMENT } from '@angular/common';


fdescribe('LogicService', () => {
  const documentMock: Document = <any>{};
  let logicService: LogicService;

  let documentWrapperServiceSpy: jasmine.SpyObj<DocumentWrapperService>;
  const spy = jasmine.createSpyObj('DocumentWrapperService',['getVendor']); 

  let documentWrapper2ServiceSpy: jasmine.SpyObj<DocumentWrapper2Service>;
  const spy2 = jasmine.createSpyObj('DocumentWrapper2Service',['getVendor']); 


  beforeEach(() => { 
    TestBed.configureTestingModule({
    providers: [DocumentWrapperService, {provide: 'DOCUMENT', useValue: documentMock}, 
      DocumentWrapper2Service, {provide: DOCUMENT, useValue: documentMock},
      LogicService, {provide: DocumentWrapperService, useValue: spy},
      LogicService, {provide: DocumentWrapper2Service, useValue: spy2}]
    })

    logicService = TestBed.get(LogicService);
    documentWrapperServiceSpy = TestBed.get(DocumentWrapperService)
    documentWrapper2ServiceSpy = TestBed.get(DocumentWrapper2Service)
  });

  fit('should be created', () => {
    const service: LogicService = TestBed.get(LogicService);
    expect(service).toBeTruthy();
  });

  fit('given safari isApple should be true', () => {
    const stubValue = 'apple';
    documentWrapperServiceSpy.getVendor.and.returnValue(stubValue);
    expect(logicService.isApple()).toBeTruthy();
  });

  fit('given chrome isApple should be false', () => {
    const stubValue = 'google';
    documentWrapperServiceSpy.getVendor.and.returnValue(stubValue);
    expect(logicService.isApple()).toBeFalsy();
  });

  fit('given safari isApple2 should be true', () => {
    const stubValue = 'apple';
    documentWrapper2ServiceSpy.getVendor.and.returnValue(stubValue);
    expect(logicService.isApple2()).toBeTruthy();
  });

  fit('given chrome isApple2 should be false', () => {
    const stubValue = 'google';
    documentWrapper2ServiceSpy.getVendor.and.returnValue(stubValue);
    expect(logicService.isApple2()).toBeFalsy();
  });
});
