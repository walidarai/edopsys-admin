import { TestBed } from '@angular/core/testing';

import { MessageNotificationsService } from './message-notifications.service';

describe('MessageNotificationsService', () => {
  let service: MessageNotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageNotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
