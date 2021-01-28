import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Observable, throwError } from 'rxjs';
import { JKeys } from 'src/app/models/JKeys';
import { LoginPayload } from 'src/app/models/LoginPayload';
import { ResponseModel } from 'src/app/models/ResponseModel';
import { map, filter, mergeMap } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';
import {AuthenticationService} from '../../services/-authentication.service'
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})

export class CallbackComponent implements OnInit {
  code:String;
  token:string;
  loginData:LoginPayload=new LoginPayload;
  _jKeys:JKeys=new JKeys();
  
  constructor(
    private localstorage:CookieService,
    private _httpClient:HttpClient,
    private route:Router,    
    private _authenticationService:AuthenticationService
    ) { }

  ngOnInit(): void {
    this.route.navigate(['/smarty']);

    // this.getToken();
    // this.loading();
  }

  loading(){
    document.addEventListener(
      "DOMContentLoaded",
      function() {
        setTimeout(function() {    document.getElementById("loading").className = "slideDown";
        }, 5000);
      },
      false
    );
    
    document.addEventListener(
      "DOMContentLoaded",
      function() {
        setTimeout(function() {
          document.getElementById("loading-center").className = "zoomOut";
        }, 5000);
      },
      false
    );
    
    
    document.addEventListener(
      "DOMContentLoaded",
      function() {
        setTimeout(function() {
          document.getElementById("block-1").className = "slideInUp";
        }, 5000);
      },
      false
    );
     
    
  }
  
  getToken(){
      var currentURL=window.location.href;
      this.code=currentURL.split('&code=')[1];
      console.log(this.code)
      if(this.localstorage.get("code")!==undefined || this.localstorage.get("code")!=undefined || this.localstorage.get("code")!=null){
          
          this._authenticationService.logIn(this.localstorage.get("code")).subscribe((response:LoginPayload)=>{
          this.route.navigate(['/smarty']);

          this.token=response.access_token;
          this.localstorage.put("token",response.access_token);
            
          //var decoded_token=jwt_decode(response.access_token);            

          },(error)=>{
            this.route.navigate['/unauthorized'];
        });
      }
  }

}
