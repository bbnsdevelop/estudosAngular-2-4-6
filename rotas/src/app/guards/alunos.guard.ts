import { Injectable, EventEmitter } from "@angular/core";
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../login/service/auth.service";


@Injectable()
export class AlunosGuard implements CanActivateChild{
    
    IsPermissao: boolean = false;

    constructor(private auhService: AuthService){

    }
    canActivateChild(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
                                                        Observable<boolean> | Promise<boolean> | boolean{
        if(state.url.includes('alunos') && this.auhService.usuarioSessao.perfil == 2){
            this.IsPermissao = false;
            //return false;
        }
        if(state.url.includes('alunos') && this.auhService.usuarioSessao.perfil == 2){
            this.IsPermissao = false;
            //return false;
        }if(this.auhService.usuarioSessao.perfil == 1){
            this.IsPermissao =true;
        }
        return true;
    }


}