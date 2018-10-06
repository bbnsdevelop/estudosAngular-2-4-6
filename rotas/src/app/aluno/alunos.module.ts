import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos/alunos.component';
import { FormsModule } from '@angular/forms';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './service/alunos.service';
import { AlunosDeactivate } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './rotas/aluno-detalhe.resolver';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule
  ],
  declarations: [
    AlunosComponent, 
    AlunosFormComponent, 
    AlunosDetalheComponent
  ],
  providers: [
    AlunosService,
    AlunosDeactivate,
    AlunoDetalheResolver
  ]
})
export class AlunosModule { }
