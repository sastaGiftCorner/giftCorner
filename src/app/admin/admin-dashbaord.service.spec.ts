import { TestBed } from '@angular/core/testing';

import { AdminDashbaordService } from './admin-dashbaord.service';

describe('AdminDashbaordService', () => {
  let service: AdminDashbaordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDashbaordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
