import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSelectItemsPerPageComponent } from './ng-select-items-per-page.component';

describe('NgSelectItemsPerPageComponent', () => {
  let component: NgSelectItemsPerPageComponent;
  let fixture: ComponentFixture<NgSelectItemsPerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgSelectItemsPerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgSelectItemsPerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
