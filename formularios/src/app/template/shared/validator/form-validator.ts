import { FormArray, FormControl, FormGroup } from "@angular/forms";

export class FormValidatoins {
    static requiredMinCheckBox(min = 1) {
        const validator = (formArray: FormArray) => {
            /*const values = formArray.controls
            let totalChecked = 0;
            for(let i = 0; i < values.length; i++){
              if(values[i].value){
                totalChecked += 1;
              }
            }*/
            const totalChecked = formArray.controls
                .map(v => v.value)
                .reduce((total, current) => current ? total + current : total, 0);
            return totalChecked >= min ? null : { required: true };
        }
        return validator;
    }

    static cepValidator(control: FormControl){
        const cep = control.value;
        if(cep && cep !== ''){
            let consultaViaCep = cep.replace(/\D/g, '');
            let validaCep = /^[0-9]{8}$/;
            return validaCep.test(consultaViaCep) ? null : { cepInvalido : true}
        }
        return null
    }

    static equalsTo(otherField: string){
        const validator = (formControl: FormControl) => {
            if(otherField == null){
                throw new Error('è necessário informar um campo');
            }
            if(!formControl.root || !(<FormGroup>formControl.root).controls){
                return null;
            }
            const field = (<FormGroup>formControl.root).get(otherField);
            if(!field){
                throw new Error('è necessário informar um campo válido');
            }
            if(field.value !== formControl.value){
                return { equalsTo : otherField};
            }
            return null;
        }
        return validator;
    }
    static getErrorMessage(fieldName: string, validatorName: string){
        const config ={

        };
    }
}