import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BuscaCepService } from '../../formTemplate/service/impl/busca-cep.service';
import { BuscaCepI } from '../../formTemplate/service/buscaCepI';

@Component({
  selector: 'data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  buscaCepI: BuscaCepI;
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private cuscaCepService: BuscaCepService) {
    this.buscaCepI = this.cuscaCepService;
   }

  ngOnInit() {
   
   /* this.formulario = new FormGroup({
      nome: new FormControl('Bruno'),
      email: new FormControl('brunno1808@hotmail.com')
    });
    */
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onSubmit(){
    console.log(this.formulario);
    this.buscaCepI.saveFormReactive(this.formulario.value).subscribe(dados =>{
      console.log(dados);
      this.formulario.reset();
    },(error: any) => alert("erro ao processar"));
  }

  resetar(){
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
    if(campoEmail.errors){
        return campoEmail.errors['email'] && campoEmail.touched;
    }
  }
  mensagemErroEmail(): boolean {
    return this.formulario.get('email').errors['email'];
  }

}
