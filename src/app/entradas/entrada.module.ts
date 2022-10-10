import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEntradasComponent } from './lista-entradas/lista-entradas.component';
import { FormularioEntradasComponent } from './formulario-entradas/formulario-entradas.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListaEntradasComponent,
    FormularioEntradasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class EntradaModule { }
