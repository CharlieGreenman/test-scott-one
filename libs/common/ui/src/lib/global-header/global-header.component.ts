import { Component, OnInit, NgModule, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatButtonModule } from '@angular/material/button';
import { faBell, faQuestionCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Input } from "@angular/core";

@Component({
  selector: 'test-scott-one-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
})
export class GlobalHeaderComponent implements OnInit {
  @Output() signUp: EventEmitter<void> = new EventEmitter();
  @Output() logIn: EventEmitter<void> = new EventEmitter();
  @Input() authenticated = false;
  faUserCircle = faUserCircle;
  faQuestionCircle = faQuestionCircle;
  faBell = faBell;
  @Output() sideNavToggle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  emitSideNavToggle() {
    this.sideNavToggle.emit();
  }

  logInEmit() {
    this.logIn.emit();
  }

  signUpEmit() {
    this.signUp.emit();
  }
}

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule
  ],
  declarations: [GlobalHeaderComponent],
  exports: [GlobalHeaderComponent],
})
export class GlobalHeaderComponentModule { }
