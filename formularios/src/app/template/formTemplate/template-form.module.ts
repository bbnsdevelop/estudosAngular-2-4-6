import { NgModule } from '@angular/core';

import { TemplateFormComponent } from './template-form/template-form.component';
import { BuscaCepService } from './service/impl/busca-cep.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    TemplateFormComponent
    
  ],
  providers: [
    BuscaCepService
  ]
})
export class TemplateFormModule { }
