import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CompoControlComponent } from './compo-control/compo-control.component';
import { BuscaEstadosImpl } from './service/impl/busca-estados-impl.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    FormDebugComponent,
    CompoControlComponent
  ],
  exports:[
    FormDebugComponent,
    CompoControlComponent
  ],
  providers:[
    BuscaEstadosImpl
  ]
})
export class SharedModule { }
