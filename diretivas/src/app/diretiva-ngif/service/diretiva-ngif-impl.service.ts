import { Injectable } from '@angular/core';
import { DiretivaNgifService } from './impl/diretiva-ngIf-service';

@Injectable()
export class DiretivaNgifImplService implements DiretivaNgifService{

  buscaValor(){
    return 'testando componente diretiva com interface'
  }
  

  constructor() { }

}
