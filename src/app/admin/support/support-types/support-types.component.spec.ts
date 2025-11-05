import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportTypesComponent } from './support-types.component';

describe('SupportTypesComponent', () => {
  let component: SupportTypesComponent;
  let fixture: ComponentFixture<SupportTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
