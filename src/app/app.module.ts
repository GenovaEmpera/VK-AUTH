import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './_services/api.service';
import { SESSION_STORAGE_SERVICE, SessionService } from './_services/session.service';
import { DataService, DATA_STORAGE_SERVICE } from './_services/data.service';
import { ProfileGuard } from './profile.guard';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';
import { LoginComponent } from './login/login.component';

import { LOCAL_STORAGE } from 'ngx-webstorage-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    FriendsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService, DataService, ProfileGuard,
    { provide: SESSION_STORAGE_SERVICE, useExisting: LOCAL_STORAGE }, SessionService,
    { provide: DATA_STORAGE_SERVICE, useExisting: LOCAL_STORAGE }, DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
