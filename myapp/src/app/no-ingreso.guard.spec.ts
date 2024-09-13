import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { noIngresoGuard } from './no-ingreso.guard';

describe('noIngresoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => noIngresoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
