import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoService } from './service/cursos.service';
import { CursosComponent } from './cursos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    //CursoService
  ],
  declarations: [
    CursosComponent
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
