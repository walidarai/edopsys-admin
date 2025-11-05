import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportTypesEditModalComponent } from './support-types-edit-modal.component';

describe('SupportTypesEditModalComponent', () => {
  let component: SupportTypesEditModalComponent;
  let fixture: ComponentFixture<SupportTypesEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportTypesEditModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportTypesEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
