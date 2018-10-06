import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  getCursos(){
    return [
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'java'},
    ];
  }

  getCurso(id: number){
    let curso = this.getCursos().find(curso => curso.id == id);
    return curso;
  }

  constructor() { }

}
