import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationUpsellsComponent } from './organization-upsells.component';

describe('OrganizationUpsellsComponent', () => {
  let component: OrganizationUpsellsComponent;
  let fixture: ComponentFixture<OrganizationUpsellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationUpsellsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationUpsellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
