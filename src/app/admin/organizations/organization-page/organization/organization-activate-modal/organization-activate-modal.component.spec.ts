import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationActivateModalComponent } from './organization-activate-modal.component';

describe('OrganizationActivateModalComponent', () => {
  let component: OrganizationActivateModalComponent;
  let fixture: ComponentFixture<OrganizationActivateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationActivateModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationActivateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
