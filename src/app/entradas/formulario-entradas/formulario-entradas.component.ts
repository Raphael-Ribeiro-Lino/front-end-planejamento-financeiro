import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { EntradaInput } from 'src/app/dtos/inputs/entradaInput';
import { EntradaService } from '../entrada.service';

@Component({
  selector: 'app-formulario-entradas',
  templateUrl: './formulario-entradas.component.html',
  styleUrls: ['./formulario-entradas.component.css']
})
export class FormularioEntradasComponent implements OnInit {
  id: number | null;

  entradaFormGroup: FormGroup;

  erroAoCadastrar: string = '';
  erroAoBuscar: string = '';

  constructor(
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private entradaService: EntradaService
  ) {
    this.id = this.activateRoute.snapshot.paramMap.get("id") as number | null;
    
    this.entradaFormGroup = this.formBuilder.group({
      tipo: ['', Validators.required],
      valor: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    if(this.id != null){
      this.entradaService.buscaPeloId(this.id).subscribe(
        data =>{
          this.entradaFormGroup =this.formBuilder.group({
            tipo: [data.tipo, Validators.required],
            valor: [data.valor, Validators.required],
          });
        },
        error =>{
          console.log(error);
          this.erroAoBuscar = error.error.message
        }
      )
    }
  }

  cadastrar(){
    this.erroAoCadastrar = ''
    let autorInput = this.entradaFormGroup.getRawValue() as EntradaInput;
    this.entradaService.cadastra(autorInput).subscribe(
      data =>{
        const navigationExtras: NavigationExtras = {state: {successData: "Entrada cadastrada com sucesso!"}}
        this.router.navigate(['entradas'], navigationExtras)
      },
      error =>{
        this.erroAoCadastrar = error.error.message
      }
    );
  }

  alterar(){
    this.erroAoCadastrar = ''
    let autorInput = this.entradaFormGroup.getRawValue() as EntradaInput;

    if(!this.id){
      return;
    }

    this.entradaService.altera(this.id, autorInput).subscribe(
      data =>{
        const navigationExtras: NavigationExtras = {state: {successData: "Entrada alterada com sucesso!"}}
        this.router.navigate(['entradas'], navigationExtras)
      },
      error =>{
        this.erroAoCadastrar = error.error.message
      }
    );
  }

}
