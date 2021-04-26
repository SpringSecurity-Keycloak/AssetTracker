import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './services/login/login-service.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginServiceService],
  },
  {
    path: 'user-profile',
    component: ProfileComponent,
    canActivate: [LoginServiceService],
  },
  {
    path: 'register',
    component: SignupComponent,
    canActivate: [LoginServiceService],
  },
  {
    path: 'landing',
    component: LandingComponent,
    canActivate: [LoginServiceService],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginServiceService],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
