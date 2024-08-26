import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  /* Objeto JSON para usuario */
  user = {
    username: '',
    password: '',
  };
  /* mensaje de respuesta */
  mensaje = '';
  /* Estado de carga */
  spinner = false;

  constructor(private router: Router, private animationController: AnimationController) {

    }

}