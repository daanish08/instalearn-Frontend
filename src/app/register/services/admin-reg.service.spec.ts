import { TestBed } from '@angular/core/testing';

import { AdminRegService } from './admin-reg.service';

describe('AdminRegService', () => {
  let service: AdminRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
