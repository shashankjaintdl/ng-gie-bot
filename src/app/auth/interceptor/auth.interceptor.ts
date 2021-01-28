// import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import {Injectable} from '@angular/core';
// import { Router } from '@angular/router';
// import { OAuthStorage } from 'angular-oauth2-oidc';
// import { Observable, of } from 'rxjs';
// import { tap } from 'rxjs/operators';



// @Injectable()
// export class AuthInterceptor implements HttpInterceptor{

//     constructor(private router:Router,private authStorage:OAuthStorage){

//     }

//     intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
//         debugger
//         if(!request.url.endsWith('.json')){
//             console.log("\n token="+this.authStorage.getItem('access_token'));
//             // debugger
//             const token=this.authStorage.getItem('access_token');
//             if(token){
//                 request=request.clone({
//                     setHeaders:{
//                         Authorization:'Bearer ${token}'
//                     },
//                 });
//             }
//         }
//         return next.handle(request).pipe(
//             tap(
//                 ()=>{

//                 },
//                 (error:any)=>{
//                     if(error instanceof HttpErrorResponse){
//                         if(error.status===401){
//                             this.router.navigate(['/unauthorize']);
//                             return of(false);
//                         }
//                     }
//                 }
//             )
//         );

//     }
// }