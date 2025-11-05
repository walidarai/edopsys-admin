import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgFeaturesComponent } from './org-features.component';

describe('OrgFeaturesComponent', () => {
  let component: OrgFeaturesComponent;
  let fixture: ComponentFixture<OrgFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrgFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrgFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
