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

 
  
}
