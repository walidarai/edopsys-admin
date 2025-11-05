import { TestBed } from '@angular/core/testing';

import { OrganizationFeaturesService } from './organization-features.service';

describe('OrganizationFeaturesService', () => {
  let service: OrganizationFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
