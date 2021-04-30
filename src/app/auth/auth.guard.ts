import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from './authservice';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.authService.login();
    }
  }
}
