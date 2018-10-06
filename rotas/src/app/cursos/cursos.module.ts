import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursosService } from './service/cursos.service';
import { CursosNaoEncontradoComponent } from './note-found/cursos-nao-encontrado/cursos-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CursosRoutingModule
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursosNaoEncontradoComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
