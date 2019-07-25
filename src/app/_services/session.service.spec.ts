import { TestBed } from '@angular/core/testing';

import { SessionService, SESSION_STORAGE_SERVICE } from './session.service';
import { LOCAL_STORAGE } from 'ngx-webstorage-service';

describe('SessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: SESSION_STORAGE_SERVICE, useExisting: LOCAL_STORAGE }, SessionService,
    ],

  }));

  it('should be created', () => {
    const service: SessionService = TestBed.get(SessionService);
    expect(service).toBeTruthy();
  });
});
