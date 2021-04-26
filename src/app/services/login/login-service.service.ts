import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { UserManager,User } from 'oidc-client';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService implements CanActivate {
  userManager: UserManager;
  
  constructor() {
    const settings = {
      authority: environment.authO.issuer,
      client_id: environment.authO.clientId,
      redirect_uri: environment.authO.redirectUri,
      silent_redirect_uri: environment.authO.redirectUri,
      post_logout_redirect_uri: environment.authO.redirectUri,
      response_type: environment.authO.response_type,
      scope: environment.authO.scope,
    };
    this.userManager = new UserManager(settings);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let currentUser: User
    this.userManager.getUser().then((result : any) => {
      currentUser = result;
    });

    console.log( "User is " + JSON.stringify(currentUser));
    if (currentUser) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    //this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    this.userManager.signinRedirectCallback(state.url);
    return false;
  }
}
