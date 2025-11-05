import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatatableItemsPerPageComponent } from './ngx-datatable-items-per-page.component';

describe('NgxDatatableItemsPerPageComponent', () => {
  let component: NgxDatatableItemsPerPageComponent;
  let fixture: ComponentFixture<NgxDatatableItemsPerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxDatatableItemsPerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxDatatableItemsPerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
