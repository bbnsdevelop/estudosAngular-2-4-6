import { Observable } from "rxjs";

export interface BuscaCepI{

    buscaCep(cep: number): Observable<any>;
    saveForm(dadosForms: any);
    saveFormReactive(dadosForms: any): Observable<any>;
}