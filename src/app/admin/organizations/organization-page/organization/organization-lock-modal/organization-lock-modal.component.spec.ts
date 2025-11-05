import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationLockModalComponent } from './organization-lock-modal.component';

describe('OrganizationLockModalComponent', () => {
  let component: OrganizationLockModalComponent;
  let fixture: ComponentFixture<OrganizationLockModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationLockModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationLockModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
