import { Component } from '@angular/core';
import { AuthService } from "@test-scott-one/common/common-services";
import { AuthService } from "@test-scott-one/common/common-services";

@Component({
  selector: 'test-scott-one-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'test-scott-one';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }

  constructor(private authService: AuthService, private authService: AuthService) {
  }

  logIn() {
    this.authService.loginWithRedirect()
  }

  signUp() {
    this.authService.signUpWithRedirect();
  }

  logIn() {
    this.authService.loginWithRedirect()
  }

  signUp() {
    this.authService.signUpWithRedirect();
  }
}
