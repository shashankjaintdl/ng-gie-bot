// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable, Injector } from "@angular/core";
// import { Router } from "@angular/router";
// import { CookieService } from "ngx-cookie";
// import { Observable } from "rxjs";
// import { LoginPayload } from "../models/LoginPayload";
// import { AuthenticationService } from "./-authentication.service";
// import jwtDecode from 'jwt-decode';


// @Injectable({
//     providedIn: 'root'
//   })
//   export class TokenInterceptorService implements HttpInterceptor {
//     LoginData:LoginPayload=new LoginPayload();

//     constructor(private _injector: Injector,
//         private _router: Router,
//         private localstorage: CookieService,
//         private _authenticationService: AuthenticationService) { }
        
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
//     }

//     getDecodedAccessToken(token: string): any {
//         try {
//           return jwtDecode(token);
//         }
//         catch (Error) {
//           return null;
//         }
//       }
  
//   }