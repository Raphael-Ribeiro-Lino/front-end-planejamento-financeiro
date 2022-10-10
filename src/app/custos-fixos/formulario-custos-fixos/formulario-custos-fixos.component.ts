import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustoFixoService } from '../custo-fixo.service';

@Component({
  selector: 'app-formulario-custos-fixos',
  templateUrl: './formulario-custos-fixos.component.html',
  styleUrls: ['./formulario-custos-fixos.component.css']
})
export class FormularioCustosFixosComponent implements OnInit {
  id: number | null;

  custoFixoFormGroup: FormGroup;
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
  }

}
