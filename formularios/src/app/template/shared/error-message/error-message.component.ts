import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidatoins } from '../validator/form-validator';

@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  //@Input('mostraErro') mostrarErro: boolean;
  //@Input('msgErro') mensagem: string;
  @Input('label') label: string;
  @Input('control') control: FormControl;
  
  constructor() { }

  ngOnInit() {
  }

  get errorMessage() {
    for (const propertyName in this.control.errors){
      if(this.control.errors.hasOwnProperty(propertyName) && this.control.touched){
        return FormValidatoins.getErrorMessage(this.label, propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }
}
