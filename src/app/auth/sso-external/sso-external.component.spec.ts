import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsoExternalComponent } from './sso-external.component';

describe('SsoExternalComponent', () => {
  let component: SsoExternalComponent;
  let fixture: ComponentFixture<SsoExternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SsoExternalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsoExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
