import { NgModule } from '@angular/core';
import { environment } from '@test-scott-one/common/common-environment';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { authConfig } from './auth-config';
import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';

@NgModule({
  imports: [
    HttpClientModule,
    AuthModule.forRoot({
      ...authConfig,
      httpInterceptor: {
        allowedList: [
          {
            uri: `${environment.graphQLURI}`
          }
        ]
      }
    }),
  ],
  providers: [
    AuthService,
    AuthHttpInterceptor
  ],
})
export class AuthCoreModule {}