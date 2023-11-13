import { AuthConfig } from '@auth0/auth0-angular';
import { environment } from '@test-scott-one/common/common-environment';

export const authConfig: AuthConfig = {
  // The app's clientId configured in Auth0
  clientId: environment.clientId,
  domain: environment.issuer,
  useRefreshTokens: true,
  cacheLocation: 'localstorage',
  authorizationParams: {
    scope: 'openid profile email offline_access read:roles',
    redirect_uri: environment.hostUrl + '/',
    audience: environment.apiIdentifier
  },
};