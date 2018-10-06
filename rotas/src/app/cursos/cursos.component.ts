import { Component, OnInit } from '@angular/core';
import { CursosService } from './service/cursos.service';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  
  cursos: any[];

  constructor(private cursoService: CursosService) { }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }

}
