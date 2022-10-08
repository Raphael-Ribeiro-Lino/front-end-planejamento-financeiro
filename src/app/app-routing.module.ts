import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioEntradasComponent } from './entradas/formulario-entradas/formulario-entradas.component';
import { ListaEntradasComponent } from './entradas/lista-entradas/lista-entradas.component';

const routes: Routes = [
  {path: "entradas", component: ListaEntradasComponent},
  {path: "entradas/formulario", component: FormularioEntradasComponent},
  {path: "entradas/formulario/:id", component: FormularioEntradasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
