import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCustosFixosComponent } from './lista-custos-fixos/lista-custos-fixos.component';
import { FormularioCustosFixosComponent } from './formulario-custos-fixos/formulario-custos-fixos.component';



@NgModule({
  declarations: [
    ListaCustosFixosComponent,
    FormularioCustosFixosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustoFixoModule { }
