import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Aluno } from "../alunos.model";
import { AlunosService } from "../service/alunos.service";

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno>{

    constructor(private alunoService: AlunosService, private router: Router){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any{
        let id = route.params['id'];
        let aluno: Aluno = this.alunoService.getAluno(id);
        if( aluno ) {
            return aluno;
        }else{
            this.router.navigate(['**']);
        }
        //undefined    
        //return 
    }

}