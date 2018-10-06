import { Component, OnInit } from '@angular/core';
import { CursoService } from './service/cursos.service';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers :[CursoService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  constructor(private service: CursoService) {

  }

  ngOnInit() {
    this.cursos = this.service.getCursos();
    CursoService.emitirCriouCurso.subscribe(
      cusrsocriado => this.cursos.push(cusrsocriado)
    );

  }

}
