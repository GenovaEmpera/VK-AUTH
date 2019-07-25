import { Component, OnInit } from '@angular/core';
import { ApiService } from './_services/api.service';
import { SessionService } from './_services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private apiService: ApiService,
              private sessionService: SessionService) {
  }

  ngOnInit() {
    this.apiService.apiInit();
  }

  logout() {
    this.apiService.logout();
  }
}
