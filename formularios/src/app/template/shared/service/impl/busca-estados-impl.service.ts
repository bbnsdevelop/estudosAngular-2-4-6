import { Injectable } from '@angular/core';
import { BuscaEstadosInService } from '../busca-estados-in.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BuscaEstadosImpl implements BuscaEstadosInService{
  constructor(private http: HttpClient) { 

  }
  getEstadosBr(){
    return this.http.get('/assets/dados/estadosbr.json');
  }

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
  
}
