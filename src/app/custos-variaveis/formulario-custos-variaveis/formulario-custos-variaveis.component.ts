import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustoVariavelService } from '../custo-variavel.service';

@Component({
  selector: 'app-formulario-custos-variaveis',
  templateUrl: './formulario-custos-variaveis.component.html',
  styleUrls: ['./formulario-custos-variaveis.component.css']
})
export class FormularioCustosVariaveisComponent implements OnInit {

  id: number | null;

  custoVariavelFormGroup: FormGroup;

  constructor(
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private custoVariavelService: CustoVariavelService
  ) {
    this.id = this.activateRoute.snapshot.paramMap.get("id") as number | null;
    this.custoVariavelFormGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      valor: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

}
