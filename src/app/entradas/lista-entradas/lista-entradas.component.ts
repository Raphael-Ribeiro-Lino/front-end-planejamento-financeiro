import { Component, OnInit } from '@angular/core';
import { EntradaOutput } from 'src/app/dtos/outputs/entradaOutput';

@Component({
  selector: 'app-lista-entradas',
  templateUrl: './lista-entradas.component.html',
  styleUrls: ['./lista-entradas.component.css']
})
export class ListaEntradasComponent implements OnInit {

  entradas: EntradaOutput[] = [
    {id: 1, tipo: "Salário", valor: 2000.00},
    {id: 2, tipo: "Aluguel", valor: 800.00},
    {id: 3, tipo: "Renda extra", valor: 1000.00},
    {id: 4, tipo: "Presente", valor: 200.00}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
