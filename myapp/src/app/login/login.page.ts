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

  formLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navControl:NavController) {
    this.formLogin = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required)
    })
  }
  ngOnInit() {
    
  }
  async ingresar(){
    const f = this.formLogin.value;

    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    if (usuario.nombre == f.nombre && usuario.password== f.password){
      console.log('Ingresado');
      localStorage.setItem('Ingresado','true');
      this.navControl.navigateRoot('enter');
    }else{
      const alert = await this.alertController.create({
        header: 'Algo te falto',
        message: 'Tienes que llenar todos los campos.',
        buttons: ['Ta Bien']
      });

      await alert.present();
      return true;
    }
  }
  
}
