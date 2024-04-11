import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorNuevoClienteComponent } from './vendedor-nuevo-cliente.component';

describe('VendedorNuevoClienteComponent', () => {
  let component: VendedorNuevoClienteComponent;
  let fixture: ComponentFixture<VendedorNuevoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorNuevoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorNuevoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
