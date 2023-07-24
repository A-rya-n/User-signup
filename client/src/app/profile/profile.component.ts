import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userProfile: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.profileService.getProfile(token).subscribe((profileData) => {
        console.log(profileData);
        this.userProfile = profileData;
      });
    } else
      (error: any) => {
        console.log('Error fetching data: ', error);
      };
  }
}
