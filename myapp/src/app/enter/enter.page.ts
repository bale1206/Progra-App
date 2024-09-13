import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EnterPageRoutingModule } from './enter-routing.module'; 

@Component({
  selector: 'app-enter',
  templateUrl: './enter.page.html',
  styleUrls: ['./enter.page.scss'],

})
export class EnterPage implements OnInit {
  username: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const user = this.authService.getUser();
    if (user) {
      this.username = user.Usuario;
    } else {
    }
  }
}