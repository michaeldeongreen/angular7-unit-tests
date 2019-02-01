import { TestBed } from '@angular/core/testing';

import { DocumentWrapper2Service } from './document-wrapper2.service';

describe('DocumentWrapper2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentWrapper2Service = TestBed.get(DocumentWrapper2Service);
    expect(service).toBeTruthy();
  });
});
