import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: 'Bruno',
    email: 'brunno1808@hotmail.com'
  }

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(formu) {
    console.log(formu);
    console.log(this.usuario);
  }
  varificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }
  aplicaClassErro(campo) {
    return {
      'has-error': this.varificaValidTouched(campo),
      'has-feedback': this.varificaValidTouched(campo)
    }
  }

  consultaCep(cep){
    let consultaViaCep = cep.replace(/\D/g, '');
    if(consultaViaCep != ""){
        let validaCep = /^[0-9]{8}$/;
        if(validaCep.test(consultaViaCep)){
          this.http.get(`//viacep.com.br/ws/${consultaViaCep}/json`)
          .map(dados => dados.json)
          .subscribe(dados => );
        }
    }
  }

}
