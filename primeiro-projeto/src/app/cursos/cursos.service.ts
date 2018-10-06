import { Injectable } from '@angular/core';
import { ICursos } from './ICursos';

@Injectable()
export class CursosService implements ICursos{

  constructor() {

  }

  getAllCurso():string[] {
    return['java', 'Angular', 'javaScript'];
  }

}
