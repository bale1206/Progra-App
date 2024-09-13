import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  resetForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    // O puedes inicializar aquí si no lo haces en el constructor
  }

  onSubmit() {
    if (this.resetForm.valid) {
      console.log(this.resetForm.value);
      this.router.navigate(['/login']);
    } else {
      console.log('Formulario no válido');
    }
  }
}
