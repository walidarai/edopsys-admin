import { TestBed } from '@angular/core/testing';

import { AdminUserAccountsService } from './admin-user-accounts.service';

describe('AdminUserAccountsService', () => {
  let service: AdminUserAccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminUserAccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
