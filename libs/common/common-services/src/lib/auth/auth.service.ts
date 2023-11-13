import { Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';
import { firstValueFrom } from 'rxjs';
import { environment } from '@test-scott-one/common/common-environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = this.auth0Service.user$;
  isAuthenticated$ = this.auth0Service.user$;
  idTokenClaims$ = this.auth0Service.idTokenClaims$;

  constructor(public auth0Service: Auth0Service) {}

  getAccessToken() {
    return this.auth0Service.getAccessTokenSilently();
  }

  async getAccessTokenPromise() {
    return await firstValueFrom(this.auth0Service.getAccessTokenSilently());
  }

  loginWithRedirect() {
    return this.auth0Service.loginWithRedirect();
  }

  signUpWithRedirect() {
    return this.auth0Service.loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup'
      }
    });
  }

  logout() {
    return this.auth0Service.logout({logoutParams: {
      returnTo: environment.hostUrl + '/'
    }});
  }
}