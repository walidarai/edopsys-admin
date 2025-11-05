import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSidePanelComponent } from './organization-side-panel.component';

describe('OrganizationSidePanelComponent', () => {
  let component: OrganizationSidePanelComponent;
  let fixture: ComponentFixture<OrganizationSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationSidePanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
