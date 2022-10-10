import { Component, OnInit } from '@angular/core';
import { CustoFixoOutput } from 'src/app/dtos/outputs/custoFixoOutput';

@Component({
  selector: 'app-lista-custos-fixos',
  templateUrl: './lista-custos-fixos.component.html',
  styleUrls: ['./lista-custos-fixos.component.css']
})
export class ListaCustosFixosComponent implements OnInit {

  custosFixos: CustoFixoOutput[] = [
    {id: 1, nome: "Internet", valor: 110},
    {id: 2, nome: "Dentista", valor: 110},
    {id: 3, nome: "Celular", valor: 367},
    {id: 4, nome: "Banho Spike", valor: 200},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
