import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class GenericImplService implements GenericService {

  constructor() { }

  getCargo(){
    return this.cargos();
  }
  private cargos(): any []{
    return [
      { nome: 'dev', nivel: 'junior', desc: 'desenvolvedor junior' },
      { nome: 'dev', nivel: 'pleno', desc: 'desenvolvedor pleno' },
      { nome: 'dev', nivel: 'sênior', desc: 'desenvolvedor sênior' },
    ];
  }
  getTecnologias(){
    return [
      {nome: 'java', desc: 'Java'},
      {nome: 'javascript', desc: 'JavaScript'},
      {nome: 'php', desc: 'PHP'},
      {nome: 'ruby', desc: 'Ruby'},
    ];
  }
  getNewsletter(){
    return [
      {valor: 's', desc: 'Sim'},
      {valor: 'n', desc: 'Não'}
    ];
  }
  getFrameWorks(){
    return [
      'Angular', 'React', 'Vue', 'Sencha'
    ];
  }
}
