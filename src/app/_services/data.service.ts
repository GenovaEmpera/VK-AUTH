import { Injectable, Inject, InjectionToken } from '@angular/core';
import { StorageService } from 'ngx-webstorage-service';

export const DATA_STORAGE_SERVICE =
  new InjectionToken<StorageService>('DATA_STORAGE_SERVICE');

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(DATA_STORAGE_SERVICE) private storage: StorageService) { }

  public storeUserProfile(user) {
    this.storage.set('profile', user);
  }
  public storeUserFriendList(friends) {
    this.storage.set('friends', friends);
  }
  public getUserFriendList() {
    return this.storage.get('friends');
  }
  public getUserProfile() {
    return this.storage.get('profile');
  }
}
