import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationDetailsFormComponent } from './organization-details-form.component';

describe('OrganizationDetailsFormComponent', () => {
  let component: OrganizationDetailsFormComponent;
  let fixture: ComponentFixture<OrganizationDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationDetailsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
