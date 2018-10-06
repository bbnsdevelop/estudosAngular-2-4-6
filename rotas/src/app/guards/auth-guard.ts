import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../login/service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad{

  constructor(private authservice: AuthService, private router: Router) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
    return this.verificaAcesso();
  }
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean{
    return this.verificaAcesso();
  }

  private verificaAcesso(): boolean{
    if(this.authservice.isUsuarioAutenticado()){
      return true;
    }else{
      this.router.navigate(['/login'])
      return false;
    }
  }
}
