import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationFeaturesComponent } from './organization-features.component';

describe('OrganizationFeaturesComponent', () => {
  let component: OrganizationFeaturesComponent;
  let fixture: ComponentFixture<OrganizationFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
