import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { noIngresoGuard } from './no-ingreso.guard';
import { ingresoGuard } from './ingreso.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [noIngresoGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'enter',
    loadChildren: () => import('./enter/enter.module').then(m => m.EnterPageModule),
    canActivate: [noIngresoGuard]
  },
  {
    path: 'reset',
    loadChildren: () => import('./reset/reset.module').then(m => m.ResetPageModule),
    canActivate: [noIngresoGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule),
    canActivate: [noIngresoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    canActivate: [noIngresoGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [ingresoGuard]
  },  {
    path: 'enter',
    loadChildren: () => import('./enter/enter.module').then( m => m.EnterPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
