import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBaseComponent } from './model-base.component';

describe('ModelBaseComponent', () => {
  let component: ModelBaseComponent;
  let fixture: ComponentFixture<ModelBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
