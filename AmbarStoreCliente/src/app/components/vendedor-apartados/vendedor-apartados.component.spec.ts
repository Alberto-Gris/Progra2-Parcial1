import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorApartadosComponent } from './vendedor-apartados.component';

describe('VendedorApartadosComponent', () => {
  let component: VendedorApartadosComponent;
  let fixture: ComponentFixture<VendedorApartadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorApartadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorApartadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
