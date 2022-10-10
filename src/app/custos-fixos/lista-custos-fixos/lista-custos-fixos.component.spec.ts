import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCustosFixosComponent } from './lista-custos-fixos.component';

describe('ListaCustosFixosComponent', () => {
  let component: ListaCustosFixosComponent;
  let fixture: ComponentFixture<ListaCustosFixosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCustosFixosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCustosFixosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
