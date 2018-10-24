import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { TemplateFormComponent } from './template-form/template-form.component';
import { HttpClientModule } from '@angular/common/http';
import { BuscaCepService } from './service/impl/busca-cep.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
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
