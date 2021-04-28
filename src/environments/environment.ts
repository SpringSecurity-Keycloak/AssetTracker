// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authO: {
    issuer: 'https://dev-r1e4o7ny.us.auth0.com',
    clientId: '9XLqEdiegPL55OISpeXd6u4M3bnPGbcy',
    redirectUri: window.location.origin,
    scope: 'openid profile email',
    response_type: 'code',
    logoutUrl:
      'https://dev-r1e4o7ny.us.auth0.com/v2/logout?federated&returnTo=https://dchacko-simple-angular-ui.herokuapp.com',
    postLogoutRedirectUri: 'https://dchacko-simple-angular-ui.herokuapp.com',
  },
};
