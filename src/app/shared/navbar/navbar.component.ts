import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { OAuthService } from 'angular-oauth2-oidc';
import { filter } from 'rxjs/operators';
import { AuthCodeFlowConfig } from '../../auth/auth.config';
import { AuthService } from 'src/app/auth/authservice';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isAuthenticated = false;

  /**
   * 
   * @param location 
   * @param router 
   * @param authService 
   */
  constructor(
    public location: Location,
    private router: Router,
    private authService: AuthService
  ) {}

  /**
   * 
   */
  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.isAuthenticated = this.authService.isAuthenticated();
    });
  }

  /**
   * 
   */
  public login() {
    console.log('Navbar login()');
    this.authService.login();
  }

  /**
   * 
   */
  public logout() {
    console.log('Navbar logout()');
    this.authService.logout();
    this.isAuthenticated = this.authService.isAuthenticated();
    this.router.navigateByUrl('landing');
  }
}
