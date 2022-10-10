import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCustosVariaveisComponent } from './lista-custos-variaveis.component';

describe('ListaCustosVariaveisComponent', () => {
  let component: ListaCustosVariaveisComponent;
  let fixture: ComponentFixture<ListaCustosVariaveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCustosVariaveisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCustosVariaveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
