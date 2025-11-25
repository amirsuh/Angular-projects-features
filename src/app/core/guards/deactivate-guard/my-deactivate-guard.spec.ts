import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { myDeactivateGuard } from './my-deactivate-guard';

describe('myDeactivateGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => myDeactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
