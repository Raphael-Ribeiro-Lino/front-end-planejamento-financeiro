import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  }

}
