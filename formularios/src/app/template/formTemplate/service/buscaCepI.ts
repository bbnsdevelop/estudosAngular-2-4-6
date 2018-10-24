import { Observable } from "rxjs/Observable";

export interface BuscaCepI{

    buscaCep(cep: number): Observable<any>;
    saveForm(dadosForms: any);
    saveFormReactive(dadosForms: any): Observable<any>;
}