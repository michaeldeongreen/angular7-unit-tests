import { TestBed } from '@angular/core/testing';

import { LogicService } from './logic.service';
import { DocumentWrapperService } from './document-wrapper.service';


fdescribe('LogicService', () => {
  const documentMock: Document = <any>{};
  let logicService: LogicService;
  let documentWrapperServiceSpy: jasmine.SpyObj<DocumentWrapperService>;
  const spy = jasmine.createSpyObj('DocumentWrapperService',['getVendor']); 

  beforeEach(() => { 
    TestBed.configureTestingModule({
    providers: [DocumentWrapperService, {provide: 'DOCUMENT', useValue: documentMock}, 
      LogicService, {provide: DocumentWrapperService, useValue: spy}]
    })

    logicService = TestBed.get(LogicService);
    documentWrapperServiceSpy = TestBed.get(DocumentWrapperService)
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
});
