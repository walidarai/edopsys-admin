import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySidePanelComponent } from './category-side-panel.component';

describe('CategorySidePanelComponent', () => {
  let component: CategorySidePanelComponent;
  let fixture: ComponentFixture<CategorySidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategorySidePanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorySidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
