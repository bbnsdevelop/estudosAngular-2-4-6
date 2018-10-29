import { Component, OnInit } from '@angular/core';
import { BuscaCepI } from '../../shared/service/buscaCepI';
import { BuscaCepService } from '../../shared/service/impl/busca-cep.service';


@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  buscaCepI: BuscaCepI;
  usuario: any = {
    nome: 'Bruno',
    email: 'brunno1808@hotmail.com'
  }
  constructor(private buscaCepService: BuscaCepService) { 
    this.buscaCepI = this.buscaCepService;
  }

  ngOnInit() {
  }

  onSubmit(formu) {
    console.log(formu);
    this.buscaCepI.saveForm(formu.value);
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
      let validaCep = /^[0-9]{8}$/;
      if (validaCep.test(consultaViaCep)) {
        this.resetaForm(form);
        this.buscaCepI.buscaCep(consultaViaCep)
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
    form.form.patchValue({ // atalualiza parcialmente o formulário
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
