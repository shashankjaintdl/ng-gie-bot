// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
// import { Observable } from "rxjs";
// import { CanComponentDeactivate } from "../models/app-component-deactivate";


// @Injectable()
// export class AuthExpiredGuard implements CanDeactivate<CanComponentDeactivate>{

//     canDeactivate(
//         component:CanComponentDeactivate,
//         currentRoute:ActivatedRouteSnapshot,
//         currentState:RouterStateSnapshot,
//         nextState?:RouterStateSnapshot
        
//         ):Observable<boolean>|Promise<boolean>|boolean{
//             if(nextState.url==='/unauthorize'){
//                 return true;
//             }

//             return component.canDeactivate?component.canDeactivate(nextState):true;
//         }
// }