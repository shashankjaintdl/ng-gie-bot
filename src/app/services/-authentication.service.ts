// import { Injectable } from "@angular/core";
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
// import {JKeys} from '../models/JKeys';
// import { CookieService } from "ngx-cookie";
// import { Response, Headers, RequestOptions, Http, RequestMethod } from "@angular/http";
// import { LoginPayload } from "../models/LoginPayload";
// import { HttpClient, HttpErrorResponse } from "@angular/common/http";
// import { map, filter, mergeMap } from 'rxjs/operators';

// @Injectable({
//     providedIn: "root"
//   })
// export class AuthenticationService{

//     public headers=new Headers({'Content-Type':''});
//     private options = new RequestOptions({ headers: this.headers });
//     _jKeys: JKeys = new JKeys();
//     constructor(private _http: Http, private _httpClient: HttpClient, private localstorage: CookieService) { }

//     Login(auth:LoginPayload){
//         auth.grant_type='authorization_code';
//         //@ts-ignore
//         var querystring = require('querystring')
//         const httpOptions = new RequestOptions({
//             method: RequestMethod.Post,
//             headers: {
//               //@ts-ignore
//               "Authorization": "Basic Y2VmMDZiZDQ6b1VmVldRT1I3VUNROUstYnlTZUlJTzFmbjFJbGFHWFNGT0JlWlljTG0zYzF3STZIZ3VJMURR",
//               "Content-Type": "application/x-www-form-urlencoded"
//             },
//         withCredentials: true,
//         body: querystring.stringify(auth)

//         });
  
//         return this._http.request(this._jKeys.maamHost + "token?code=502abf9e-853a-4dda-9fcd-d71b9c88d6b8&redirect-uri=https%3A%2F%2Fgie.azurewebsites.net%2Fchat.html", httpOptions)
//         .pipe
//         (
//             map((response: Response) => response.json()),
//             catchError(this.handleError)
//       );   
//     }

//     handleError(error: HttpErrorResponse) {
//         if (error.error instanceof ErrorEvent) {
//           // A client-side or network error occurred. Handle it accordingly.
//           console.error('An error occurred:', error.error.message);
//         } else {
//           // The backend returned an unsuccessful response code.
//           // The response body may contain clues as to what went wrong,
//           console.error(
//             `Backend returned code ${error.status}, ` +
//             `body was: ${error.error}`);
//         }
//         // return an observable with a user-facing error message
//         return throwError(
//           'Something bad happened; please try again later.');
//       };
// }