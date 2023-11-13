import { Component } from '@angular/core';

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
}
