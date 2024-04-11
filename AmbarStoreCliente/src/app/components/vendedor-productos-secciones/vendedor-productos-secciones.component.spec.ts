import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorProductosSeccionesComponent } from './vendedor-productos-secciones.component';

describe('VendedorProductosSeccionesComponent', () => {
  let component: VendedorProductosSeccionesComponent;
  let fixture: ComponentFixture<VendedorProductosSeccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorProductosSeccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorProductosSeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
