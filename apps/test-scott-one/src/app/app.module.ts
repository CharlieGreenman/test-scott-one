import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./routing/app-routing.module";
import { GlobalHeaderComponentModule } from "@test-scott-one/common/ui";
import { GlobalFooterModule } from "@test-scott-one/common/ui";
import { GlobalSidenavModule } from "@test-scott-one/common/ui";
import { MatListModule } from "@angular/material/list";
import { AuthCoreModule } from "@test-scott-one/common/common-services";
import { AuthCoreModule } from "@test-scott-one/common/common-services";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, GlobalHeaderComponentModule, GlobalFooterModule, GlobalSidenavModule, MatListModule, AuthCoreModule, AuthCoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
