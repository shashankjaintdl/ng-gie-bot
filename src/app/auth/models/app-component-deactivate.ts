import {RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

export interface CanComponentDeactivate{
    canDeactivate:(nextState?: RouterStateSnapshot)=>Observable<boolean>|Promise<boolean>|boolean;
}