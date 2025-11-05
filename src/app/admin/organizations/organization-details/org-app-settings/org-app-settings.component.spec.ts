import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAppSettingsComponent } from './org-app-settings.component';

describe('OrgAppSettingsComponent', () => {
  let component: OrgAppSettingsComponent;
  let fixture: ComponentFixture<OrgAppSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrgAppSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrgAppSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
