import { TestBed } from '@angular/core/testing';

import { Menuconfig } from './menuconfig';

describe('Menuconfig', () => {
  let service: Menuconfig;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Menuconfig);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
