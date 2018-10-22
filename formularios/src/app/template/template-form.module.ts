import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { FormDebugComponent } from './form-debug/form-debug.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';
import { CompoControlComponent } from './compo-control/compo-control.component';
import { HttpClientModule } from '@angular/common/http';
import { BuscaCepService } from './service/impl/busca-cep.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    TemplateFormComponent,
    DataFormComponent,
    FormDebugComponent,
    CompoControlComponent
  ],
  providers: [
    BuscaCepService
  ]
})
export class TemplateFormModule { }
