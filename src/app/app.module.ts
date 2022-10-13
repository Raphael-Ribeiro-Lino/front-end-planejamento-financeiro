import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustoFixoModule } from './custos-fixos/custo-fixo.module';
import { CustoVariavelModule } from './custos-variaveis/custo-variavel.module';
import { EntradaModule } from './entradas/entrada.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EntradaModule,
    CustoFixoModule,
    CustoVariavelModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
