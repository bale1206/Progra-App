import { Component, OnInit } from '@angular/core';  // Ajusta la ruta según tu estructura de carpetas
import { Router } from '@angular/router';
import { FormGroup, 
  FormControl,
  Validators,
  FormBuilder 
   } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navControl:NavController) {
    this.formularioLogin = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required)
    })
  }
  ngOnInit() {

  }
  async entrar() {
    const f = this.formularioLogin.value;

    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

    if (usuario.nombre == f.nombre && usuario.password == f.password) {
      console.log('Ingresado');
      localStorage.setItem('Ingresado', 'true');
      this.navControl.navigateRoot('enter');
      return true;  // Añadir un return aquí para indicar éxito
    } else {
      const alert = await this.alertController.create({
        header: 'Algo te falto',
        message: 'Tienes que llenar todos los campos.',
        buttons: ['Ta Bien']
      });

      await alert.present();
      return false;  // Retornar false si no se cumple el if
    }
  }


}