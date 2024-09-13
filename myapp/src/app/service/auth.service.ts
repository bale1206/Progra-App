import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private users: { username: string, password: string, details: any }[] = [];
    private loggedInUser: any = null;

    constructor(private router: Router) {}

    // Método para registrar un usuario (ya existente en tu código)
    async register(username: string, password: string, details: any): Promise<void> {
      return new Promise((resolve, reject) => {
        const existingUser = this.users.find(u => u.username === username);
        if (existingUser) {
          reject('El usuario ya existe');
        } else {
          this.users.push({ username, password, details });
          this.loggedInUser = { username, details }; // Guarda el usuario logueado
          resolve();
        }
      });
    }

    // Método para obtener el usuario logueado
    getUser() {
      return this.loggedInUser; // Devuelve el usuario logueado
    }
  }