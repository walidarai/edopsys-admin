import { TestBed } from '@angular/core/testing';

import { AppMaintenanceService } from './app-maintenance.service';

describe('AppMaintenanceService', () => {
  let service: AppMaintenanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppMaintenanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
