import { Component, OnInit,Inject} from '@angular/core';
import { LoginPayload } from 'src/app/models/LoginPayload';
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {JKeys} from '../../models/JKeys';
import { CookieService } from "ngx-cookie";
import { Response, Headers, RequestOptions, Http, RequestMethod } from "@angular/http";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { map, filter, mergeMap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    show:boolean=false;
    max:boolean=false;
  _jKeys:JKeys=new JKeys();
  public auth:LoginPayload;
  constructor(private _http: Http, private _httpClient: HttpClient, private localstorage: CookieService,@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {

  this.authorize().subscribe((response)=>{
    localStorage.setItem("code",response.code)
    console.log(response)
    },(error)=>{
  })

  this.Login(localStorage.getItem("code")).subscribe((response)=>{
      debugger
      localStorage.setItem("token",response.token);
      
    },(error)=>{
  })
      
    
  }

  authorize(){
    debugger
    //@ts-ignore
    // var querystring = require('querystring')
    // const httpOptions = new RequestOptions({
    //     method: RequestMethod.Post,
    //     headers: {
    //       //@ts-ignore
    //       "Authorization": "Basic Y2VmMDZiZDQ6b1VmVldRT1I3VUNROUstYnlTZUlJTzFmbjFJbGFHWFNGT0JlWlljTG0zYzF3STZIZ3VJMURR",
    //       "Content-Type": "application/x-www-form-urlencoded"
    //     },
    // body: querystring.stringify({"grant_type":"authorization_code"})

    // });

    return this._http.get('https://maam.axa.com/maam/v2/authorize?client_id=cef06bd4&response_type=code&scope=urn%3Aaxa%3Agie%3Achatbot%3Agir&redirect_uri=https%3A%2F%2Fgie.azurewebsites.net%2Fchat.html')
    .pipe
    (
        map((response: Response) => response.json()),
        catchError(this.handleError)
  );   
}


// redirect() {

//     var urlToRedirect = 
//     'https://maam.axa.com/maam/v2/authorize?client_id=cef06bd4&response_type=code&scope=urn%3Aaxa%3Agie%3Achatbot%3Agir&redirect_uri=https%3A%2F%2Fgie.azurewebsites.net%2Fchat.html';
//     //@ts-ignore
//     $(location).prop('href', urlToRedirect);
// }

// //Check url function
//  urlCheck(str) {
//     var patt = '&code';
//     var result = str.match(patt);
//     return result;
// }

  onShow(){
       //@ts-ignore
       $(document).ready(function(){
        //@ts-ignore
    
          $(".chat_on").click(function(){
        //@ts-ignore
    
              $(".Layout").toggle();
        //@ts-ignore
    
              $(".chat_on").hide(300);
          });
        //@ts-ignore
          
             $(".chat_close_icon").click(function(){
        //@ts-ignore
    
              $(".Layout").hide();
        //@ts-ignore
    
                 $(".chat_on").show(300);
          });
          
      });
  }
  onMaximize(){
    console.log("Maximize");
    this.max=true;

    //@ts-ignore

    const elem:HTMLElement = document.getElementsByClassName("Layout-open");
    this.setStyleAttribute(elem[0], {'height':'90%', 'max-height':'90%'});
    //@ts-ignore

    const elem1:HTMLElement = document.getElementsByClassName("Layout-expand");
    this.setStyleAttribute(elem1[0], {'height':'90%', 'min-height':'90%','margin-left':'30px'});
   //@ts-ignore

   const elem3:HTMLElement = document.getElementsByClassName("Layout");
   this.setStyleAttribute(elem3[0], {'min-width':'100%', 'max-height':'100%','right':'0px',});


  }

  onResize(){
    this.max=false;
    
    //@ts-ignore

    const elem:HTMLElement = document.getElementsByClassName("Layout-open");
    this.setStyleAttribute(elem[0], {'height':'650px', 'max-height':'650px'});
    //@ts-ignore

    const elem1:HTMLElement = document.getElementsByClassName("Layout-expand");
    this.setStyleAttribute(elem1[0], {'height':'650px', 'min-height':'650px'});
   //@ts-ignore

   const elem3:HTMLElement = document.getElementsByClassName("Layout");
   this.setStyleAttribute(elem3[0], {'min-width':'500px', 'max-height':'500px','right':'2px',"margin-left":"15px"});
  }

 setStyleAttribute(element: HTMLElement, attrs: { [key: string]: Object }): void {
    if (attrs !== undefined) {
        Object.keys(attrs).forEach((key: string) => {
          //@ts-ignore
            element.style.setProperty(key,attrs[key]);
        });
    }
}
  Login(code){
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

    return this._http.request(this._jKeys.maamHost + "token?code="+code+"&redirect-uri=https%3A%2F%2Fgie.azurewebsites.net%2Fchat.html", httpOptions)
    .pipe
    (
        map((response: Response) => response.json()),
        catchError(this.handleError)
  );   
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
  };


}
