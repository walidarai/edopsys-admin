import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationMessageEditComponent } from './notification-message-edit.component';

describe('NotificationMessageEditComponent', () => {
  let component: NotificationMessageEditComponent;
  let fixture: ComponentFixture<NotificationMessageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationMessageEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationMessageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
