import { AuthConfig } from 'angular-oauth2-oidc';
 
export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://maam-stg.axa.com/maam/v2',

  loginUrl:'https://maam-stg.axa.com/maam/v2/authorize',
  //URL of the SPA to redirect the user to after 'login
   redirectUri: 'https://gie-bot-test.azurewebsites.net',

  // redirectUri: window.origin+"/index.html",
  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',

  clientId: 'cef06bd4',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',

  responseType: 'code',

  // tokenEndpoint:'https://maam-stg.axa.com/maam/v2/token',
  
  
  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one

  scope: 'urn:axa:gie:chatbot:gir',
  // silentRefreshRedirectUri:window.origin+'/silent-refresh.html',

  useSilentRefresh:true,
  silentRefreshTimeout: 5000,
  timeoutFactor:0.25,
  sessionChecksEnabled:false,
  showDebugInformation:true,
  clearHashAfterLogin:false,
  nonceStateSeparator:'semicolon',
  oidc:false,
  // sessionChecksEnabled:true

};