import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorCarritoComponent } from './vendedor-carrito.component';

describe('VendedorCarritoComponent', () => {
  let component: VendedorCarritoComponent;
  let fixture: ComponentFixture<VendedorCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
