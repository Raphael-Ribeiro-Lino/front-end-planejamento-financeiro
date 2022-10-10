import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCustosFixosComponent } from './formulario-custos-fixos.component';

describe('FormularioCustosFixosComponent', () => {
  let component: FormularioCustosFixosComponent;
  let fixture: ComponentFixture<FormularioCustosFixosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCustosFixosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCustosFixosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
