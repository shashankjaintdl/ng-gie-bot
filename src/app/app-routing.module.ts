import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from '../app/components/pages/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { RedirectComponent } from './components/pages/redirect/redirect.component';
import { GuardGuard } from './services/-guard.guard';
// import { UnauthorizedComponent } from './auth/unauthorized/unauthorized.component';

const routes: Routes = [
  // { path: 'chat.html', redirectTo: '/smarty', pathMatch: 'full' },
  // {path:'**',redirectTo:"smarty"},
  // {path:'unauthorize',component:UnauthorizedComponent},
  // { path: '', redirectTo: '/callback', pathMatch: 'full' },

  {path: '', redirectTo: '/authorize', pathMatch: 'full'},
  {path:'authorize',component:RedirectComponent},
  {path:'callback',component:CallbackComponent},
  // {path:'unauthorized',component:UnauthorizedComponent},
  {path: 'smarty',component:HomeComponent,canActivate:[GuardGuard]},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
