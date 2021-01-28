// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
// import { Observable } from "rxjs";
// import { filter, map, switchMap } from "rxjs/operators";
// import { AuthService } from "../service/auth.service";


// @Injectable()
// export class AuthWithForcedLoginGuard implements CanActivate{

//     constructor(private authService:AuthService){}

//     canActivate(_:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>{
//         return this.authService.isDoneLoading$.pipe(
//             filter(done=>done),
//             switchMap(()=>this.authService.isAuthenticated$),
//             map((isAuthenticated)=>{
//                 if(!isAuthenticated){
//                     this.authService.login(state.url);
//                 }
//                 return isAuthenticated;
//             })
//         );
//     }
// }