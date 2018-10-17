import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { FormDebugComponent } from './form-debug/form-debug.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    TemplateFormComponent,
    DataFormComponent,
    FormDebugComponent
  ]
})
export class TemplateFormModule { }
