import { Component, OnInit } from '@angular/core';
import { ICursos } from './ICursos';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursoService: ICursos;
  cursos: string[]; 

  constructor() {
    this.cursoService =  new CursosService() 
    this.nomePortal = 'http://loiane.training';
  }
  
  ngOnInit() {
    this.cursos = this.cursoService.getAllCurso();
  }

}
