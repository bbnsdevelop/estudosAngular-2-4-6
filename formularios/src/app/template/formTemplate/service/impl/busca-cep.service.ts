import { Injectable } from '@angular/core';
import { BuscaCepI } from '../buscaCepI';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BuscaCepService implements BuscaCepI{

  constructor(private httpClient: HttpClient) { }

  buscaCep(cep: number): Observable<any>{
    return this.httpClient.get<any>(`https://viacep.com.br/ws/${cep}/json/`);
  }

  saveForm(dadosForms: any){
    this.httpClient.post('https://httpbin.org/post', JSON.stringify(dadosForms)).subscribe(dados => console.log(dados));
  }
}
