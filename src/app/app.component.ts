import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { CookieService } from 'ngx-cookie';
import { map, filter, mergeMap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// import { AuthService } from './auth/service/auth.service';
import { authCodeFlowConfig } from './config/auth-code.config';
import { JKeys } from './models/JKeys';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'AXA-GIE-UI-NG';

  
  code:string=null;
  _jKeys:JKeys=new JKeys();
  
  constructor(protected localStorage:CookieService,private renderer: Renderer2){
    this.redirect();
  }
  ngAfterViewInit() {
    let loader = this.renderer.selectRootElement('#fuse-splash-screen');
    this.renderer.setStyle(loader, 'display', 'none');
 }
  redirect(){
    var currentURL=window.location.href;
    this.code=currentURL.split('&code=')[1];
    this.localStorage.put('code',this.code);
    // console.log("code"+this.code);
    // if(this.code===undefined || this.code==undefined){
    // window.location.href =  this._jKeys.maamStgHost+
    //                        'authorize?client_id='+
    //                         this._jKeys.clientId+
    //                         '&response_type='+
    //                         this._jKeys.response_type+
    //                         '&scope=urn%3Aaxa%3Agie%3Achatbot%3Agir&redirect_uri='+
    //                         this._jKeys.stgRedirectUrl;
    // }
  }

    getToken(code){
  //     //@ts-ignore
  //     var querystring = require('querystring')
  //     const httpOptions = new RequestOptions({
  //         method: RequestMethod.Post,
  //         headers: {
  //           //@ts-ignore
  //           "Authorization": "Basic Y2VmMDZiZDQ6b1VmVldRT1I3VUNROUstYnlTZUlJTzFmbjFJbGFHWFNGT0JlWlljTG0zYzF3STZIZ3VJMURR",
  //           "Content-Type": "application/x-www-form-urlencoded"
  //         },
  //     body: querystring.stringify({"grant_type":"authorization_code"})
  //     });
  //     return this._http.request(this._jKeys.maamStgHost + "token?code="+code+"&redirect-uri="+this._jKeys.stgRedirectUrl, httpOptions)
  //     .pipe
  //     (
  //         map((response)=>{response.json()}),
  //         catchError(this.handleError)
  //   );   
    }

   handleError(error: HttpErrorResponse) {
  //     if (error.error instanceof ErrorEvent) {
  //       // A client-side or network error occurred. Handle it accordingly.
  //       console.error('An error occurred:', error.error.message);
  //     } else {
  //       // The backend returned an unsuccessful response code.
  //       // The response body may contain clues as to what went wrong,
  //       console.error(
  //         `Backend returned code ${error.status}, ` +
  //         `body was: ${error.error}`);
  //     }
  //     // return an observable with a user-facing error message
  //     return throwError(
  //       'Something bad happened; please try again later.');
    }


    configureSingleSignOn(){
  //     this.oAuthService.configure(authCodeFlowConfig);
  //     this.oAuthService.tokenValidationHandler=new JwksValidationHandler();
  //     this.oAuthService.initCodeFlow();
   }
  // get token(){
  //   let claims:any=this.oAuthService;
  //   console.log("Claims"+claims);
  //   debugger
  //   return claims?claims:null;
  // }
}
