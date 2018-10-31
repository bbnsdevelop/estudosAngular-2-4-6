import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { BuscaCepService } from '../../shared/service/impl/busca-cep.service';
import { BuscaCepI } from '../../shared/service/buscaCepI';
import { BuscaEstadosInService } from '../../shared/service/busca-estados-in.service';
import { BuscaEstadosImpl } from '../../shared/service/impl/busca-estados-impl.service';
import { Estado } from '../../shared/model/estados-br.model';
import { GenericService } from '../../shared/service/generic.service';
import { GenericImplService } from '../../shared/service/impl/generic-impl.service';
import { FormValidatoins } from '../../shared/validator/form-validator';

@Component({
  selector: 'data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  buscaCepI: BuscaCepI;
  genericService: GenericService;
  buscaEstadosService: BuscaEstadosInService;
  formulario: FormGroup;
  estados: Array<Estado>;
  cargos: any[];
  tecnologias: any[];
  newsLatters: any[];
  frameWorks: any[];

  constructor(private formBuilder: FormBuilder, private buscaCepService: BuscaCepService, private buscaEstadosImpl: BuscaEstadosImpl, private genericImplService: GenericImplService) {
    this.buscaEstadosService = this.buscaEstadosImpl;
    this.buscaCepI = this.buscaCepService;
    this.genericService = this.genericImplService;
  }

  ngOnInit() {
     this.buscaEstadosService.getEstadosBr().subscribe(dados => this.formatEstadoJsonToEstado(dados));
     this.cargos = this.genericService.getCargo(); 
     this.tecnologias = this.genericService.getTecnologias();
     this.newsLatters = this.genericService.getNewsletter(); 
     this.frameWorks = this.genericService.getFrameWorks();
    /* this.formulario = new FormGroup({
       nome: new FormControl('Bruno'),
       email: new FormControl('brunno1808@hotmail.com'),
       endereco: new FormGroup({
          cep: new FormControl(null),
          numero: new FormControl(null),
          complemento: new FormControl(null),
          rua: new FormControl(null),
          bairro: new FormControl(null),
          cidade: new FormControl(null),
          estado: new FormControl(null)
       })
     });
     */
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [null, [Validators.required, Validators.email]],
      confirmarEmail: [null, [FormValidatoins.equalsTo('email')]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidatoins.cepValidator]],
        numero: [null, [Validators.required]],
        complemento: [null],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]]
      }),
      cargo: [null],
      tecnologia: [null],
      newsletter: ['s'],
      termos: [false, Validators.pattern('true')],
      frameWorks: this.builderFrameworks()
    });
  }
  builderFrameworks(){
    const values = this.frameWorks.map(v => new FormControl(false));
    return this.formBuilder.array(values, FormValidatoins.requiredMinCheckBox(1));
  }
  onSubmit() {
    if (this.formulario.valid) {
      let valueSubmit = Object.assign({}, this.formulario.value);
      valueSubmit = Object.assign(valueSubmit, {
        frameWorks: valueSubmit.frameWorks
          .map((v, i) => v ? this.frameWorks[i] : null)
          .filter(v => v !== null)
      });
      this.buscaCepI.saveFormReactive(valueSubmit).subscribe(dados => {
        console.log(dados);
        this.formulario.reset();
      }, (error: any) => alert("erro ao processar"));
    }
    else{
     this.validaFormulario(this.formulario);
    }

  }
  validaFormulario(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(campo =>{
      const controle = formGroup.get(campo);
      controle.markAsTouched();
      if(controle instanceof FormGroup){
        this.validaFormulario(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }
  aplicaClassErro(campo) {
    return {
      'has-error': this.varificaValidTouched(campo),
      'has-feedback': this.varificaValidTouched(campo)
    }
  }
  varificaValidTouched(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }
  varificaEmailValid(): boolean {
    let campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }
  mensagemErroEmail(): boolean {
    return this.formulario.get('email').errors['email'].valid;
  }

  consultaCep() {
    let cep = this.formulario.get("endereco.cep").value;
    let consultaViaCep = cep.replace(/\D/g, '');
    if (consultaViaCep != "") {
      let validaCep = /^[0-9]{8}$/;
      if (validaCep.test(consultaViaCep)) {
        this.resetaForm();
        this.buscaCepI.buscaCep(consultaViaCep)
          .subscribe(dados => this.popularDadosForm(dados));
      }
    }
  }
  popularDadosForm(dados) {
    this.formulario.patchValue({
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
  }
  resetaForm() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        bairro: null,
        complemento: null,
        cidade: null,
        estado: null
      }
    });
  }
  private formatEstadoJsonToEstado(elements){
    this.estados = new Array();
    let estado: Estado;
    elements.forEach(element =>{
      estado = new Estado(element.id, element.sigla, element.nome);
      this.estados.push(estado);
    });
  }
 
  ngOnDestroy(){
    this.estados = null;
  }
  
  
}
