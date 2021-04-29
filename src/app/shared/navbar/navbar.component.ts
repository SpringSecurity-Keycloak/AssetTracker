import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { OAuthService } from 'angular-oauth2-oidc';
import { filter } from 'rxjs/operators';
import { AuthCodeFlowConfig } from '../../auth/auth.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isAuthenticated = false;
  public isCollapsed = true;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(
    public location: Location,
    private router: Router,
    private oauthService: OAuthService
  ) {
    
  }

  ngOnInit() {
    this.oauthService.configure(AuthCodeFlowConfig);
    this.isAuthenticated = this.oauthService.hasValidAccessToken();
    this.router.events.subscribe((event) => {
      this.isAuthenticated = this.oauthService.hasValidAccessToken();
    });
    /*
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
      if (event instanceof NavigationStart) {
        if (event.url != this.lastPoppedUrl)
          this.yScrollStack.push(window.scrollY);
      } else if (event instanceof NavigationEnd) {
        if (event.url == this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          window.scrollTo(0, this.yScrollStack.pop());
        } else window.scrollTo(0, 0);
      }
    });
    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
   */
  }

  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());

    if (titlee === '#/home') {
      return true;
    } else {
      return false;
    }
  }
    
  isDocumentation() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee === '#/documentation') {
      return true;
    } else {
      return false;
    }
  }

  public login() {
    console.log("In login()");
    this.oauthService.loadDiscoveryDocumentAndLogin().then((result: boolean) => {
      console.log("result is " + result);
      this.isAuthenticated = result;
      this.router.navigateByUrl("home");
    });
    
    // Optional
    this.oauthService.setupAutomaticSilentRefresh();
  }
    
  public logout() {
    this.oauthService.logOut();
    this.isAuthenticated = this.oauthService.hasValidAccessToken();
    this.router.navigateByUrl('landing');
  }
}
