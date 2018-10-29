import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CompoControlComponent } from './compo-control/compo-control.component';
import { BuscaEstadosImpl } from './service/impl/busca-estados-impl.service';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    FormDebugComponent,
    CompoControlComponent
  ],
  exports:[
    FormDebugComponent,
    CompoControlComponent,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[
    BuscaEstadosImpl
  ]
})
export class SharedModule { }
