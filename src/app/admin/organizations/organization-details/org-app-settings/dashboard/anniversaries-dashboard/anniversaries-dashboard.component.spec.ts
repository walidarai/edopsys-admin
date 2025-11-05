import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnniversariesDashboardComponent } from './anniversaries-dashboard.component';

describe('AnniversariesDashboardComponent', () => {
  let component: AnniversariesDashboardComponent;
  let fixture: ComponentFixture<AnniversariesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnniversariesDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnniversariesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
