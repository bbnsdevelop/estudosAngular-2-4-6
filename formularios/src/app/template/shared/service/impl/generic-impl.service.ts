import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenericImplService implements GenericService {

  constructor(private httpClient: HttpClient) { }

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

  getDadosIniciais(){
    return this.httpClient.get('/assets/dados/templatereativo.json');
  }
  verificarEmail(email: string){
    return this.httpClient.get('/assets/dados/varificarEmail.json')
        .pipe(
          delay(3000),
          map((dados: {emails: any[]}) => dados.emails),
          map((dados: {email: string}[]) => dados.filter(v => v.email === email)),
          map((dados: any[]) => dados.length > 0)
        );
  }
}
