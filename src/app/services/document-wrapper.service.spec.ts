import { TestBed } from '@angular/core/testing';

import { DocumentWrapperService } from './document-wrapper.service';

describe('DocumentWrapperService', () => {
  const documentMock: Document = <any>{};
  beforeEach(() => TestBed.configureTestingModule({
    providers: [DocumentWrapperService, {provide: 'DOCUMENT', useValue: documentMock}]
  }));

  it('should be created', () => {
    const service: DocumentWrapperService = TestBed.get(DocumentWrapperService);
    expect(service).toBeTruthy();
  });
});
