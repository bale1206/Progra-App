import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';  // Ajusta la ruta según tu estructura de carpetas

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
      // Maneja el caso en que el usuario no está autenticado
      // Por ejemplo, redirigir al login
      // this.router.navigate(['/login']);
    }
  }
}
