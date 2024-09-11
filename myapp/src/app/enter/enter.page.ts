import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.page.html',
  styleUrls: ['./enter.page.scss'],
})
export class EnterPage implements OnInit {
  username = '';
  constructor(private router: Router) {
    const navegacion = this.router.getCurrentNavigation();
    const state = navegacion?.extras.state as {
      username: '';
      password: '';
    };
    this.username = state.username;
    //Console.log
    //Mensaje bienvenida
  }

  ngOnInit() {}
}