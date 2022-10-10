import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCustosVariaveisComponent } from './formulario-custos-variaveis.component';

describe('FormularioCustosVariaveisComponent', () => {
  let component: FormularioCustosVariaveisComponent;
  let fixture: ComponentFixture<FormularioCustosVariaveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCustosVariaveisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCustosVariaveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
