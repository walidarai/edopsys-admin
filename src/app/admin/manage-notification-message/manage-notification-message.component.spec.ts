import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNotificationMessageComponent } from './manage-notification-message.component';

describe('ManageNotificationMessageComponent', () => {
  let component: ManageNotificationMessageComponent;
  let fixture: ComponentFixture<ManageNotificationMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageNotificationMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageNotificationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
