import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { CustoFixoInput } from 'src/app/dtos/inputs/custoFixoInput';
import { CustoFixoService } from '../custo-fixo.service';

@Component({
  selector: 'app-formulario-custos-fixos',
  templateUrl: './formulario-custos-fixos.component.html',
  styleUrls: ['./formulario-custos-fixos.component.css']
})
export class FormularioCustosFixosComponent implements OnInit {
  id: number | null;

  custoFixoFormGroup: FormGroup;

  erroAoCadastrar: string = '';
  erroAoBuscar: string = '';
  constructor(
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private custoFixoService: CustoFixoService
  ) {
    this.id = this.activateRoute.snapshot.paramMap.get("id") as number | null;
    this.custoFixoFormGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      valor: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    if(this.id == null){
      return
    }
    this.custoFixoService.buscaPeloId(this.id).subscribe(
      data =>{
        console.log(data);
        this.custoFixoFormGroup = this.formBuilder.group({
          nome: [data.nome, Validators.required],
          valor: [data.valor, Validators.required],
        });
      },
      error =>{
        console.log(error);
        this.erroAoBuscar = error.error.message;
      }
    )
  }

  cadastrar(){
    this.erroAoCadastrar = '';
    let custoFixoInput = this.custoFixoFormGroup.getRawValue() as CustoFixoInput;
    this.custoFixoService.cadastra(custoFixoInput).subscribe(
      data =>{
        const navigationExtras: NavigationExtras = {state: {successData: "Custo fixo cadastrado com sucesso!"}}
        this.router.navigate(['custos-fixos'], navigationExtras)
      },
      error =>{
        this.erroAoCadastrar = error.error.message
      }
    )
  }

  alterar(){
    this.erroAoCadastrar = '';
    let custoFixoInput = this.custoFixoFormGroup.getRawValue() as CustoFixoInput;
    if(!this.id){
      return;
    }
    this.custoFixoService.altera(this.id, custoFixoInput).subscribe(
      data =>{
        const navigationExtras: NavigationExtras = {state: {successData: "Custo fixo alterado com sucesso!"}}
        this.router.navigate(['custos-fixos'], navigationExtras)
      },
      error =>{
        this.erroAoCadastrar = error.error.message
      }
    )
  }
}
