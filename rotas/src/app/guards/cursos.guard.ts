import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class CursoGuard implements CanActivateChild{


    canActivateChild(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
                                                        Observable<boolean> | Promise<boolean> | boolean{
        return true;
    }


}