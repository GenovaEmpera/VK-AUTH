import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from '../login/login.component';
import { FriendsComponent } from '../friends/friends.component';
import { ApiService } from '../_services/api.service';

import { By } from '@angular/platform-browser';
import { SESSION_STORAGE_SERVICE, SessionService } from '../_services/session.service';
import { LOCAL_STORAGE } from 'ngx-webstorage-service';
import { DataService, DATA_STORAGE_SERVICE } from '../_services/data.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let vk = document.createElement('div');
  const mockProfile = {
    firstName: 'John',
    lastName: 'Smith',
    city: 'London',
    photoUrl: 'photo',
    interests: 'Cheese rolling'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent, LoginComponent, FriendsComponent],
      imports: [AppRoutingModule],
      providers: [ApiService,
        { provide: SESSION_STORAGE_SERVICE, useExisting: LOCAL_STORAGE }, SessionService,
        { provide: DATA_STORAGE_SERVICE, useExisting: LOCAL_STORAGE }, DataService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;

    (function (d, id) {
      vk.id = 'vk_api_transport';
      document.body.appendChild(vk);
      var el = d.createElement('script');
      el.type = "text/javascript";
      el.src = "https://vk.com/js/api/openapi.js?161";
      el.async = true;
      document.getElementById(id).appendChild(el);
    }(document, 'vk_api_transport'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the profile details', () => {
    expect(mockProfile).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.media'))).toBeDefined();
  });

});
