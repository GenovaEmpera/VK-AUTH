import { TestBed } from '@angular/core/testing';

import { DataService, DATA_STORAGE_SERVICE } from './data.service';
import { LOCAL_STORAGE } from 'ngx-webstorage-service';

describe('DataService', () => {

  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DATA_STORAGE_SERVICE, useExisting: LOCAL_STORAGE },
        DataService
      ],
      imports: []
    });

    service = TestBed.get(DataService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
