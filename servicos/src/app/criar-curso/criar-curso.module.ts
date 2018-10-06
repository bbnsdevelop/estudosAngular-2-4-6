import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoService } from '../cursos/service/cursos.service';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';
import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    //CursoService
  ],
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  exports: [
    CriarCursoComponent
  ]
})
export class CriarCursoModule { }
