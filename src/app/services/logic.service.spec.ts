import { TestBed } from '@angular/core/testing';

import { LogicService } from './logic.service';
import { DocumentWrapperService } from './document-wrapper.service';

fdescribe('LogicService', () => {
  const documentMock = { defaultView: {navigator: {vendor: 'apple'}} };
  beforeEach(() => TestBed.configureTestingModule({
    providers: [DocumentWrapperService, {provide: 'DOCUMENT', useValue: documentMock}]
  }));

  fit('should be created', () => {
    const service: LogicService = TestBed.get(LogicService);
    expect(service).toBeTruthy();
  });

  fit('spy stub should work', () => {
    /*const documentMockSpy = jasmine.createSpyObj('DocumentWrapperService',['getVendor']);
    const stubValue = 'apple';
    documentMockSpy.getVendor.and.returnValue(stubValue);*/
    const service: LogicService = TestBed.get(LogicService);
    console.log(service.isApple());
    expect(service.isApple()).toBeTruthy();
  });
});
