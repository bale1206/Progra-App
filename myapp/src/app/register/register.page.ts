import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Adjust the import based on your project structure
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',  // Adjust to your template file
  styleUrls: ['./register.page.scss']   // Adjust to your style file
})
export class RegisterPage implements OnInit{
  registerForm: FormGroup;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder, 
    public alertController: AlertController, public navControl: NavController
  ) {

    this.registerForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Apellido: ['', Validators.required],
      Usuario: ['', Validators.required],
      datetime: ['', Validators.required],
      Numero: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(){
      
  } 

  async register() {
    var f = this.registerForm.value;
    /* if (this.registerForm.invalid) {
      const alert = await this.alertController.create({
        header: 'Algo te falto',
        subHeader: 'Subtitle',
        message: 'Tienes que llenar todos los campos.',
        buttons: ['Ta Bien']
      })

      await alert.present();

      return;} */

      var usuario = { 
        Nombre: f.Nombre, 
        Apellido: f.Apellido, 
        Usuario: f.Usuario, 
        datetime: f.datetime, 
        Numero: f.Numero, 
        password: f.password };

        localStorage.setItem('usuario', JSON.stringify(usuario));

        localStorage.setItem('ingresado', 'true');
          this.navControl.navigateRoot('login');

     
      }
    }
