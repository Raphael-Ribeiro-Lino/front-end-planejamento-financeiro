import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaCustosVariaveisComponent } from './lista-custos-variaveis/lista-custos-variaveis.component';
import { FormularioCustosVariaveisComponent } from './formulario-custos-variaveis/formulario-custos-variaveis.component';



@NgModule({
  declarations: [
    ListaCustosVariaveisComponent,
    FormularioCustosVariaveisComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CustoVariavelModule { }
