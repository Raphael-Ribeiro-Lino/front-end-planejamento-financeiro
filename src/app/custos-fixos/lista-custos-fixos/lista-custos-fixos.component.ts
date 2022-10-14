import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustoFixoOutput } from 'src/app/dtos/outputs/custoFixoOutput';
import { CustoFixoService } from '../custo-fixo.service';

@Component({
  selector: 'app-lista-custos-fixos',
  templateUrl: './lista-custos-fixos.component.html',
  styleUrls: ['./lista-custos-fixos.component.css']
})
export class ListaCustosFixosComponent implements OnInit {

  custosFixos: CustoFixoOutput[] = []

  erroNaRequiscao: string = '';
  mensagemCustosCadastrados: string = '';
  custoFixoCadastradoComSucesso: string = '';
  
  constructor(private custoFixoService: CustoFixoService, private router: Router) {
    const currentNavigation = router.getCurrentNavigation();
    if(currentNavigation?.extras?.state?.['successData']){
      this.custoFixoCadastradoComSucesso = currentNavigation.extras.state?.['successData']
    }
   }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(){
    this.custoFixoService.listaTodos().subscribe(
      data =>{
        if(data.length > 0){
          this.custosFixos = data;
        }else{
          this.mensagemCustosCadastrados = "Não foi possível listar os custos fixos, cadastre um custo fixo e tente novamente!"
        }
      },
      error =>{
        console.log(error);
        this.erroNaRequiscao = "Ocorreu um erro na requisição!";
      }
    )
  }
}
