import { Injectable } from '@angular/core';
import { BuscaEstadosInService } from '../busca-estados-in.service';
import { Estado } from '../../model/estados-br.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BuscaEstadosImpl implements BuscaEstadosInService{

  constructor(private http: Http) { 

  }
  getEstadosBr(){
    return this.http.get('/assets/dados/estadosbr.json').map((res: Response) => res.json());
    
  }
  
}
