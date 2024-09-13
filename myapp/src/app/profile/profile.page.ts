import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  username: string;

  constructor(private route: ActivatedRoute) {
    this.username = this.route.snapshot.paramMap.get('username') || '';
  }
}
