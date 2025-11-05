import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationStatusComponent } from './organization-status.component';

describe('OrganizationStatusComponent', () => {
  let component: OrganizationStatusComponent;
  let fixture: ComponentFixture<OrganizationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
