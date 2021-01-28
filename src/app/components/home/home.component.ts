import { Component, OnInit} from '@angular/core';
import { LoginPayload } from 'src/app/models/LoginPayload';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {JKeys} from '../../models/JKeys';
import { CookieService } from "ngx-cookie";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { map, filter, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show:boolean=false;
  max:boolean=false;
  token:string=null;
  _jKeys:JKeys=new JKeys();
  public auth:LoginPayload;

  constructor(
    private localstorage: CookieService,
    ) { }

  ngOnInit(): void {
      this.token=this.localstorage.get('token');
      if(this.token!=undefined || this.token!==undefined || this.token!=null){
        // this.authStorage.getItem('access_token')
        this.onLoad();
        this.onShow();
      }
     
      // this.onLoad();
      // this.onShow();
    
  }

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

  onLoad(){
    //@ts-ignore
    $(document).ready(function(){
        //@ts-ignore
       $(".Layout").toggle();
      //@ts-ignore
       $(".chat_on").hide(300);

   });
   this.onShow();

}
  
  onMaximize(){
    console.log("Maximize");
    this.max=true;
    var screenHeight=window.innerHeight;
    var screenWidth=window.innerWidth;
    
    if(screenHeight<900 && screenWidth<480){
    //@ts-ignore
    const elem:HTMLElement = document.getElementsByClassName("Layout-open");
    this.setStyleAttribute(elem[0], {'height':'100%', 'max-height':'100%'});
    //@ts-ignore

    const elem1:HTMLElement = document.getElementsByClassName("Layout-expand");
    this.setStyleAttribute(elem1[0], {'height':'100%', 'min-height':'100%'});
    }
    else{

    //@ts-ignore
    const elem:HTMLElement = document.getElementsByClassName("Layout-open");
    this.setStyleAttribute(elem[0], {'height':'90%', 'max-height':'90%'});
    //@ts-ignore

    const elem1:HTMLElement = document.getElementsByClassName("Layout-expand");
    this.setStyleAttribute(elem1[0], {'height':'90%', 'min-height':'90%'});
    }
   //@ts-ignore

   const elem3:HTMLElement = document.getElementsByClassName("Layout");
   this.setStyleAttribute(elem3[0], {'min-width':'100%', 'max-height':'100%','right':'0px',});


  }

  onResize(){
    var screenWidth=window.innerWidth;
    this.max=false;
    console.log("Width"+window.screen.width);
    var screenHeight=window.innerHeight;

    var screenPerc =((Number(screenWidth)/Number(window.screen.width))*100)-65;
    console.log(screenPerc);
    if(screenHeight<900 && screenWidth<480){
     //@ts-ignore
     const elem:HTMLElement = document.getElementsByClassName("Layout-open");
     this.setStyleAttribute(elem[0], {'height':'90%', 'max-height':'90%'});
     //@ts-ignore
 
     const elem1:HTMLElement = document.getElementsByClassName("Layout-expand");
     this.setStyleAttribute(elem1[0], {'height':'90%', 'min-height':'90%'});
    }
    else{

    //@ts-ignore
    const elem:HTMLElement = document.getElementsByClassName("Layout-open");
    this.setStyleAttribute(elem[0], {'height':'70%', 'max-height':'70%'});
    //@ts-ignore

    const elem1:HTMLElement = document.getElementsByClassName("Layout-expand");
    this.setStyleAttribute(elem1[0], {'height':'70%', 'min-height':'70%'});
    }
    if(screenWidth<480){
      //@ts-ignore
      const elem3:HTMLElement = document.getElementsByClassName("Layout");
      this.setStyleAttribute(elem3[0], {'min-width':screenWidth+"px", 'max-height':'500px','right':'2px',"margin-left":"15px"});
    }
    else{
      //@ts-ignore
      const elem3:HTMLElement = document.getElementsByClassName("Layout");
      // this.setStyleAttribute(elem3[0], {'min-width':screenPerc+"%", 'max-height':'500px','right':'2px',"margin-left":"15px"});
      this.setStyleAttribute(elem3[0], {'min-width':"40%", 'max-height':'500px','right':'2px',"margin-left":"15px"});

    }
  
  }

setStyleAttribute(element: HTMLElement, attrs: { [key: string]: Object }): void {
    if (attrs !== undefined) {
        Object.keys(attrs).forEach((key: string) => {
          //@ts-ignore
            element.style.setProperty(key,attrs[key]);
        });
    }
}


//   Login(code){
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
//     return this._http.request(this._jKeys.maamHost + "token?code="+code+"&redirect-uri=https%3A%2F%2Fgie.azurewebsites.net%2Fchat.html", httpOptions)
//     .pipe
//     (
//         map((response: Response) => response.json()),
//         catchError(this.handleError)
//   );   
// }

// handleError(error: HttpErrorResponse) {
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
//   };


}
