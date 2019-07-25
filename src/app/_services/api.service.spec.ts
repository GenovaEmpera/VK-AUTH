import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { AppRoutingModule } from '../app-routing.module';

xdescribe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[],
    imports:[ AppRoutingModule],
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
