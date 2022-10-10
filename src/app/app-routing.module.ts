import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCustosFixosComponent } from './custos-fixos/formulario-custos-fixos/formulario-custos-fixos.component';
import { ListaCustosFixosComponent } from './custos-fixos/lista-custos-fixos/lista-custos-fixos.component';
import { FormularioCustosVariaveisComponent } from './custos-variaveis/formulario-custos-variaveis/formulario-custos-variaveis.component';
import { ListaCustosVariaveisComponent } from './custos-variaveis/lista-custos-variaveis/lista-custos-variaveis.component';
import { FormularioEntradasComponent } from './entradas/formulario-entradas/formulario-entradas.component';
import { ListaEntradasComponent } from './entradas/lista-entradas/lista-entradas.component';

const routes: Routes = [
  {path: "entradas", component: ListaEntradasComponent},
  {path: "entradas/formulario", component: FormularioEntradasComponent},
  {path: "entradas/formulario/:id", component: FormularioEntradasComponent},
  {path: "custos-fixos", component: ListaCustosFixosComponent},
  {path: "custos-fixos/formulario", component: FormularioCustosFixosComponent},
  {path: "custos-fixos/formulario/:id", component: FormularioCustosFixosComponent},
  {path: "custos-variaveis", component: ListaCustosVariaveisComponent},
  {path: "custos-variaveis/formulario", component: FormularioCustosVariaveisComponent},
  {path: "custos-variaveis/formulario/:id", component: FormularioCustosVariaveisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
