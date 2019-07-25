import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { DataService } from '../_services/data.service';
import { Profile } from '../_models/profile.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  constructor(private apiService: ApiService,
              private dataService: DataService) { }

  ngOnInit() {
    this.apiService.apiInit();
    this.profile = this.dataService.getUserProfile();
  }
}
