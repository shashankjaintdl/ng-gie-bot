import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from '../app/components/pages/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { GuardGuard } from './services/-guard.guard';
import { RedirectComponent } from './components/pages/redirect/redirect.component';
import { ChatReportsComponent } from './components/reports/chat-reports/chat-reports.component';
import { LogoutComponent } from './components/pages/logout/logout.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
// import { UnauthorizedComponent } from './auth/unauthorized/unauthorized.component';

const routes: Routes = [
  // { path: 'chat.html', redirectTo: '/smarty', pathMatch: 'full' },
  // {path:'**',redirectTo:"smarty"},
  // {path:'unauthorize',component:UnauthorizedComponent},
  {path: '', redirectTo: '/smarty', pathMatch: 'full' },
  // {path: 'smarty',component:HomeComponent},
  {path:'auth',component:RedirectComponent},
  {path:'callback',component:CallbackComponent},
  // {path:"logout",component:LogoutComponent},
  {path: 'smarty',component:HomeComponent,canActivate:[GuardGuard]},
  // {path:'admin/dashboard',component:DashboardComponent},
  // {path:"admin/report/chat-report",component:ChatReportsComponent},
  // {path:'unauthorized',component:UnauthorizedComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
