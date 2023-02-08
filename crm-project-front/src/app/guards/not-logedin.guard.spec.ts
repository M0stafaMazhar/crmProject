import { TestBed } from '@angular/core/testing';

import { NotLogedinGuard } from './not-logedin.guard';

describe('NotLogedinGuard', () => {
  let guard: NotLogedinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotLogedinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
