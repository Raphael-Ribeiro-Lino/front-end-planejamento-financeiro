import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCustosFixosComponent } from './lista-custos-fixos/lista-custos-fixos.component';
import { FormularioCustosFixosComponent } from './formulario-custos-fixos/formulario-custos-fixos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListaCustosFixosComponent,
    FormularioCustosFixosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CustoFixoModule { }
