import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.apiService.apiInit();
  }

  login() {
    this.apiService.login();
  }
}
