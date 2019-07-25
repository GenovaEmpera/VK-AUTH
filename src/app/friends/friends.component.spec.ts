import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsComponent } from './friends.component';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { AppRoutingModule } from '../app-routing.module';
import { StorageServiceModule } from 'angular-webstorage-service';
import { ApiService } from '../_services/api.service';

xdescribe('FriendsComponent', () => {
  let component: FriendsComponent;
  let fixture: ComponentFixture<FriendsComponent>;
  let vk = document.createElement('div');
  let apiService: ApiService;
  const mockFriendlist = [
    { first_name: 'Vasya', last_name: 'Ivanov',  photo_100: '', interests: 'books, newspapers', city: { title: 'Spb' }}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsComponent, LoginComponent, ProfileComponent ],
      imports: [AppRoutingModule, StorageServiceModule ],
      providers: [ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsComponent);
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

});
