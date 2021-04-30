import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { AuthService } from './authservice';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): Observable<boolean> {
    if (this.authService.isAuthenticated()) {
      console.log("Authguard is authenticated");
      let activated: Observable<boolean> = new Observable<boolean>(
        
        (subscriber) => {
          subscriber.next(true);
        }
      );
      return activated;
    } else {
      console.log('Authguard is not authenticated');
      this.authService.login();
      return this.authService.authenticationEventObservable;
    }
  }
}
