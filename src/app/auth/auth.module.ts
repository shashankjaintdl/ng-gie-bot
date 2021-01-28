// import { CommonModule } from "@angular/common";
// import { HTTP_INTERCEPTORS } from "@angular/common/http";
// import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
// import { AuthConfig, OAuthModule, OAuthStorage } from "angular-oauth2-oidc";
// import { CookieService } from "ngx-cookie";
// import { from } from "rxjs";
// import { authCodeFlowConfig } from "../config/auth-code.config";
// import { AuthExpiredGuard } from "./guards/auth-expired.guard";
// import { AuthWithForcedLoginGuard } from "./guards/auth-with-forced-login.guard";
// import { AuthInterceptor } from "./interceptor/auth.interceptor";
// import { AuthService } from "./service/auth.service";
// import { UnauthorizedComponent } from './unauthorized/unauthorized.component';


// @NgModule({
//     declarations:[UnauthorizedComponent],
//     imports:[
//         CommonModule,
//         OAuthModule.forRoot()
//     ],
//     providers:[
//         AuthService,
//         AuthWithForcedLoginGuard,
//         AuthExpiredGuard,
//         CookieService,
//         {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
//     ]
   
// })

// export class AuthModule{
//     static forRoot():ModuleWithProviders<AuthModule>{
//         return {
//             ngModule:AuthModule,
//             providers:[
//                 {provide:AuthConfig,useFactory:initializeAuthConfig,deps:[]},
//                 {provide:OAuthStorage,useFactory:storageFactory}
//             ]
//         };
       
//     }
//     constructor(@Optional() @SkipSelf() parentModule:AuthModule){
//         if(parentModule){
//             throw new Error('${parentModule} has already been loaded')
//         }
//     }
// }

// export function storageFactory():OAuthStorage{
//     return localStorage;
// }

// export function initializeAuthConfig(){
//     const origin=window.location.origin;
//     const authConfig=new AuthConfig(authCodeFlowConfig);
//     return authConfig;
// }