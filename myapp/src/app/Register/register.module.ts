import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { registerPage } from './register.page';

import { registerPageRoutingModule } from './register-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    registerPageRoutingModule
  ],
  declarations: [registerPage]
})
export class registerPageRoutingModule {}
