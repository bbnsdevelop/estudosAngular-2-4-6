import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CompoControlComponent } from './compo-control/compo-control.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormDebugComponent,
    CompoControlComponent
  ],
  exports:[
    FormDebugComponent,
    CompoControlComponent
  ]
})
export class SharedModule { }
