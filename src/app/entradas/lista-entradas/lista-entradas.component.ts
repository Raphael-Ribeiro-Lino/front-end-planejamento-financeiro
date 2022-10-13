import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntradaOutput } from 'src/app/dtos/outputs/entradaOutput';
import { EntradaService } from '../entrada.service';

@Component({
  selector: 'app-lista-entradas',
  templateUrl: './lista-entradas.component.html',
  styleUrls: ['./lista-entradas.component.css']
})
export class ListaEntradasComponent implements OnInit {

  erroNaRequiscao: string = '';
  mensagemSemEntradasCadastradas: string = '';
  entradaCadastradaComSucesso: string = '';

  entradas: EntradaOutput[] = []

  constructor(private entradaService: EntradaService, private router: Router) {
    const currentNavigation = router.getCurrentNavigation();
    if(currentNavigation?.extras?.state?.['successData']){
      this.entradaCadastradaComSucesso = currentNavigation.extras.state?.['successData']
    }
   }

  ngOnInit(): void {
    this.buscaTodas();
  }

  buscaTodas(){
    this.entradaService.buscaTodas().subscribe(
      data =>{
        if(data.length > 0){
          this.entradas = data;
        }else{
          this.mensagemSemEntradasCadastradas = "Não foram encontradas entradas!"
        }
      },
      error =>{
        this.erroNaRequiscao = "Ocorreu um erro na requisição!";
        console.log(error);
        
      }
    )
  }

}
