import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradasComponent } from './entradas.component';
import { ListaEntradasComponent } from './lista-entradas/lista-entradas.component';
import { FormularioEntradasComponent } from './formulario-entradas/formulario-entradas.component';



@NgModule({
  declarations: [
    EntradasComponent,
    ListaEntradasComponent,
    FormularioEntradasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EntradaModule { }
