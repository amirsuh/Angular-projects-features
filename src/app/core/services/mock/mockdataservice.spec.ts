import { TestBed } from '@angular/core/testing';

import { Mockdataservice } from './mockdataservice';

describe('Mockdataservice', () => {
  let service: Mockdataservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mockdataservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
