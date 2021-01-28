// import { Injectable } from "@angular/core";
// import {ReplaySubject, BehaviorSubject} from 'rxjs';
// import {OAuthService,OAuthErrorEvent} from 'angular-oauth2-oidc';
// import {Router} from '@angular/router';
// import {filter} from 'rxjs/operators';
// import {CookieService} from 'ngx-cookie';
// import { promise } from "protractor";

// @Injectable({
//     providedIn:'root'
// })
// export class AuthService{
//     private isDoneLoadingSubject$=new ReplaySubject<boolean>();
//     private isAuthenticatedSubject$=new BehaviorSubject<boolean>(false);

//     isDoneLoading$=this.isDoneLoadingSubject$.asObservable();
//     isAuthenticated$=this.isAuthenticatedSubject$.asObservable();

//     constructor(private router:Router,private oAuthService:OAuthService,private cookieService:CookieService){
//         // debugger
//         // this.accessTokenChangedValidation();
//         // this.validateTokenEveryEvent();
//         // this.redirectToLoginPageEndSession();
//         // this.oAuthService.setupAutomaticSilentRefresh();
//     }

//     login(targetedUrl:string){
//         this.oAuthService.initLoginFlow(targetedUrl||this.router.url);
//     }

//     logout(){
//         this.cookieService.removeAll();
//         this.oAuthService.logOut(false);
//     }

//     runInitialLoginSequence():Promise<void>{
//         debugger
//         return (
//             this.oAuthService.loadDiscoveryDocument().
//             then(()=>{this.oAuthService.tryLogin()})
//             .then(()=>{

//                 debugger
//                 if(this.oAuthService.hasValidAccessToken()){
//                     return Promise.resolve();
//                 }
//                 return this.oAuthService.silentRefresh().
//                 then(()=>{
//                     Promise.resolve()
//                 }).catch((result)=>{
//                     const errorResponseRequiringUserIneraction=[
//                         'interaction_required',
//                         'login_required',
//                         'account_selection_required',
//                         'consent_required'
//                     ];
//                     if(result && result.reason && errorResponseRequiringUserIneraction.indexOf(result.reason.error)>0){
//                         this.oAuthService.initImplicitFlow();
//                         return Promise.resolve();
//                     }
//                     return Promise.reject(result);
                   
//                 })
//             }).then(()=>{
//                 this.isDoneLoadingSubject$.next(true);
//                 if(this.oAuthService.state && this.oAuthService.state!='undefined' && this.oAuthService.state!=null){
//                     let stateUrl=this.oAuthService.state;
//                     if(!stateUrl.startsWith("/")){
//                         stateUrl=decodeURIComponent(stateUrl);
//                     }
//                     this.router.navigateByUrl(stateUrl);

//                 }
//             })
//             .catch(()=>this.isDoneLoadingSubject$.next(true))
//         );
//     }
//     private redirectToLoginPageEndSession(){
//         this.oAuthService.events.pipe(
//             filter((e)=>['session_terminated','session_error'].includes(e.type))
//         ).subscribe(_=>this.navigateToLoginPage());
//     }

//     private validateTokenEveryEvent(){
//         this.oAuthService.events.subscribe((_)=>{
//             this.isAuthenticatedSubject$.next(this.oAuthService.hasValidAccessToken());
//         });
//     }
//     private navigateToLoginPage(){
//         this.router.navigateByUrl('/unauthorize');
//     }

//     private accessTokenChangedValidation(){
//         window.addEventListener('storage',(event)=>{
//             if(event.key!='access_token' && event.key!=null){
//                 return null;
//             }
//             this.isAuthenticatedSubject$.next(this.oAuthService.hasValidAccessToken());
//             if(!this.oAuthService.hasValidAccessToken()){
//                 this.navigateToLoginPage();
//             }
//         });
//     }

// }