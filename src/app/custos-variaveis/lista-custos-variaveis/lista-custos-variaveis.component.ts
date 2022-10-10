import { Component, OnInit } from '@angular/core';
import { CustoVariavelOutput } from 'src/app/dtos/outputs/custoVariavelOutput';

@Component({
  selector: 'app-lista-custos-variaveis',
  templateUrl: './lista-custos-variaveis.component.html',
  styleUrls: ['./lista-custos-variaveis.component.css']
})
export class ListaCustosVariaveisComponent implements OnInit {

  custosVariaveis: CustoVariavelOutput [] =[
    {id: 1, nome: "Diversão", valor: 200},
    {id: 2, nome: "Cartão de crédito", valor: 420},
    {id: 3, nome: "Transporte", valor: 100},
    {id: 4, nome: "Katia", valor: 80}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
