import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie";
import { Observable } from "rxjs";
import { LoginPayload } from "../models/LoginPayload";
import { AuthenticationService } from "./-authentication.service";
import jwtDecode from 'jwt-decode';
import { JKeys } from "../models/JKeys";


@Injectable({
    providedIn: 'root'
  })
  export class TokenInterceptorService implements HttpInterceptor {
    LoginData:LoginPayload=new LoginPayload();
    _jKeys:JKeys=new JKeys();
    constructor(private _injector: Injector,
        private _router: Router,
        private localstorage: CookieService,
        private _authenticationService: AuthenticationService) { }
        
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        debugger
        console.log("",req);
        let authService = this._injector.get(AuthenticationService)
        var token = this.localstorage.get('token');
        if(req.url.includes("&code")){
            console.log("URL"+req.url)
            this.localstorage.remove("code")
            this.localstorage.put('code',req.url.split("&code=")[1])
            console.log("Code======"+this.localstorage.get("code"))

        }
        else if(req.url===this._jKeys.webChatURL){
            return next.handle(req);
        }
        else{
            req = req.clone({
                setHeaders: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + token
                }
            })
        }

        return next.handle(req);

       
    }

    getDecodedAccessToken(token: string): any {
        try {
          return jwtDecode(token);
        }
        catch (Error) {
          return null;
        }
      }
  
  }