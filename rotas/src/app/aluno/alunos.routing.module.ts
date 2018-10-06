import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AlunosDetalheComponent } from "./alunos-detalhe/alunos-detalhe.component";
import { AlunosComponent } from "./alunos/alunos.component";
import { AlunosFormComponent } from "./alunos-form/alunos-form.component";
//import { AlunosGuard } from "../guards/alunos.guard";
import { AlunosDeactivate } from "../guards/alunos-deactivate.guard";
import { AlunoDetalheResolver } from "./rotas/aluno-detalhe.resolver";

const ALUNOS_ROUTES: Routes = [
    { path: '', component: AlunosComponent, children : [
        { path: 'novo', component: AlunosFormComponent },
        { path: ':id', component: AlunosDetalheComponent, resolve: { aluno: AlunoDetalheResolver } },
        { path: ':id/editar', component: AlunosFormComponent, canDeactivate: [AlunosDeactivate] }
    ]}   
];

@NgModule({
    imports:[RouterModule.forChild(ALUNOS_ROUTES)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {

   
}