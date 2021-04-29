import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    //canActivate: [AutoLoginGuard],
  },
  {
    path: 'user-profile',
    component: ProfileComponent,
    //canActivate: [AutoLoginGuard],
  },
  {
    path: 'register',
    component: SignupComponent,
    //canActivate: [AutoLoginGuard],
  },
  {
    path: 'landing',
    component: LandingComponent,
    //canActivate: [AutoLoginGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    //canActivate: [AutoLoginGuard],
  },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
