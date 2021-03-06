import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {JKeys} from '../models/JKeys';
import { CookieService } from "ngx-cookie";
import { Response, Headers, RequestOptions, Http, RequestMethod } from "@angular/http";
import { LoginPayload } from "../models/LoginPayload";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, filter, mergeMap } from 'rxjs/operators';
// import { JwtHelper } from "angular2-jwt";

@Injectable({
    providedIn: "root"
  })
export class AuthenticationService{

    public headers=new Headers({'Content-Type':''});
    // helper:JwtHelper=new JwtHelper();
    private options = new RequestOptions({ headers: this.headers });
    _jKeys: JKeys = new JKeys();

    constructor(private _http: Http, private _httpClient: HttpClient, private localstorage: CookieService) { }

    logIn(code):Observable<LoginPayload>{
        //@ts-ignore
        var querystring = require('querystring')
        const httpOptions = new RequestOptions({
            method: RequestMethod.Post,
            headers: {
              //@ts-ignore
              "Authorization": "Basic Y2VmMDZiZDQ6b1VmVldRT1I3VUNROUstYnlTZUlJTzFmbjFJbGFHWFNGT0JlWlljTG0zYzF3STZIZ3VJMURR",
              "Content-Type": "application/x-www-form-urlencoded"
            },
        body: querystring.stringify({"grant_type":"authorization_code"})
        });
        return this._http.request(this._jKeys.maamStgHost + "token?code="+code+"&redirect_uri="+this._jKeys.stgRedirectUrl,httpOptions)
        .pipe(
            map((response:Response)=>response.json()),
            catchError(this.handleError)
        );
      }

      loggedIn() {
        return !!this.localstorage.get('token');
      }

      getToken() {
        return this.localstorage.get('token');
      }

      handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      }


      // isTokenExpired(token?: string): boolean {
      //   if(!token) token = this.getToken();
      //   if(!token) return true;

      //   const date = this.helper.getTokenExpirationDate(token);
      //   console.log(date);
      //   if(date === undefined) return false;
      //   return !(date.valueOf() > new Date().valueOf());
      // }

}
