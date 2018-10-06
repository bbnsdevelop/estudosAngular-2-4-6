import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AlunosService } from "../aluno/service/alunos.service";
//import { IFormCandeactivate } from "./i-form-candeactivate";
import { AlunosFormComponent } from "../aluno/alunos-form/alunos-form.component";

@Injectable()
export class AlunosDeactivate implements CanDeactivate<AlunosFormComponent>{

    constructor(private canDeactivateRouter: AlunosService){

    }
    canDeactivate(
        component: AlunosFormComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean{
        let confirma;
        if(this.canDeactivateRouter.modarRota){
            confirma = confirm("Ao sair da tela você perderá os dados editados");   
            return confirma;
        }else{
            return !this.canDeactivateRouter.modarRota;
        }
    }

}
/*
export class AlunosDeactivate implements CanDeactivate<IFormCandeactivate>{

    constructor(private canDeactivateRouter: AlunosService){

    }
    canDeactivate(
        component: IFormCandeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean{
       
        return component.podeDesativar();
    }

}

*/