import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { registerPage } from './register.page';

const routes: Routes = [
  {
    path: '',
    component: registerPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}