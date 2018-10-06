import { Component, OnInit } from '@angular/core';
import { CursoService } from '../cursos/service/cursos.service';

@Component({
  selector: 'criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers :[CursoService]
})
export class CriarCursoComponent implements OnInit {
  cursos: string[] = [];
  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }

  onAddCurso(curso) {
    this.cursoService.addCursos(curso);
  }

}
