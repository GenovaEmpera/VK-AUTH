import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './session.service';
import { DataService } from './data.service';
import { Friend } from '../_models/friend.model';
import { Profile } from '../_models/profile.model';

declare var VK: any;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private router: Router,
    private zone: NgZone,
    private sessionService: SessionService,
    private dataService: DataService, ) {
  }
  public apiInit() {
    (window as any).vkAsyncInit = function () {
      VK.init({
        apiId: '7046845',
      });
    };
    (function (d, id) {
      var el = d.createElement('script');
      el.type = "text/javascript";
      el.src = "https://vk.com/js/api/openapi.js?161";
      el.async = true;
      document.getElementById(id).appendChild(el);
    }(document, 'vk_api_transport'));
  }
  public getProfile() {
    this.zone.run(() => {
      const profileReq = {
        user_id: this.sessionService.getSessionID(),
        fields: 'photo_100,city,interests',
        v: "5.73"
      };
      VK.Api.call('users.get', profileReq, r => {
        if (r.response) {
          if (this.dataService.getUserProfile() === undefined) {
            let el = document.createElement('p');
            el.className = 'text-secondary';
            el.textContent = `Добро пожаловать ${r.response[0].first_name} ${r.response[0].last_name}`;
            document.getElementById('profile').appendChild(el);
          }
          this.dataService.storeUserProfile(
            new Profile({
              firstName: r.response[0].first_name,
              lastName: r.response[0].last_name,
              city: r.response[0].city ? r.response[0].city.title : 'предпочитает не указывать',
              photoUrl: r.response[0].photo_100,
              interests: r.response[0].interests || 'предпочитает не делиться'
            })
          );
        }
      });
    });
  }

  public getFriendList() {
    this.zone.run(() => {
      const friendsReq = {
        user_id: this.sessionService.getSessionID(),
        count: 5,
        order: name,
        fields: 'photo_100,city,interests',
        v: "5.73"
      };
      VK.Api.call('friends.search', friendsReq, r => {
        if (r.response) {
          this.dataService.storeUserFriendList(r.response.items.map( friend => {          
            return new Friend({
              firstName: friend.first_name,
              lastName: friend.last_name,
              city: friend.city?friend.city.title:'предпочитает не указывать',
              photoUrl: friend.photo_100,
              interests: friend.interests || 'предпочитает не делиться'
            });
          }));
        }
      });
    });
  }

  public login() {
    this.zone.run(() => {
      VK.Auth.login((response) => {
        if (response.session) {
          this.sessionService.createSession(response.session.user.id, true);
          this.getProfile();
          this.getFriendList();
          this.router.navigate(['profile']);
          console.log('Logged in and authenticated!');
        } else {
          console.log('Not authenticated!');
        }
      }, VK.access.FRIENDS);
    });
  }

  public logout() {
    VK.Auth.logout();
    this.sessionService.destroySession();
    this.router.navigate(['login']);
  }
}
