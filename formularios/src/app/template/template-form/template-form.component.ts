import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

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
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(formu) {
    console.log(formu);
    console.log(this.usuario);
  }
  varificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }
  aplicaClassErro(campo) {
    return {
      'has-error': this.varificaValidTouched(campo),
      'has-feedback': this.varificaValidTouched(campo)
    }
  }

  consultaCep(cep, form) {
    let consultaViaCep = cep.replace(/\D/g, '');
    if (consultaViaCep != "") {
      this.resetaForm(form);
      let validaCep = /^[0-9]{8}$/;
      if (validaCep.test(consultaViaCep)) {
        this.httpClient.get<any>(`https://viacep.com.br/ws/${consultaViaCep}/json/`)
          .subscribe(dados => this.popularDadosForm(dados, form));
      }
    }
  }
  popularDadosForm(dados, form) {
    form.setValue({
      nome: form.value.nome,
      email: form.value.email,
      endereco: {
        cep: dados.cep,
        numero: "",
        complemento: "",
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
    form.form.patchValue({
      endereco: {
        cep: dados.cep,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }
  resetaForm(form) {
    form.form.patchValue({
      endereco: {
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
