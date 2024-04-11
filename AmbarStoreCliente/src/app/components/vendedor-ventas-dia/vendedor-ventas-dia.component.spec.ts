import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorVentasDiaComponent } from './vendedor-ventas-dia.component';

describe('VendedorVentasDiaComponent', () => {
  let component: VendedorVentasDiaComponent;
  let fixture: ComponentFixture<VendedorVentasDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorVentasDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorVentasDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
