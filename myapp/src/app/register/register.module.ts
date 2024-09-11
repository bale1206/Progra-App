import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterPage } from './register.page';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,  // Add ReactiveFormsModule
    RouterModule.forChild([{ path: '', component: RegisterPage }]),
  ],
  declarations: [RegisterPage],
})
export class RegisterPageModule {}
