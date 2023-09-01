import { TestBed } from '@angular/core/testing';

import { ProductDeactivateGuard } from './product-deactivate.guard';

describe('ProductDeactivateGuard', () => {
  let guard: ProductDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
