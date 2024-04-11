import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductosSeccionesComponent } from './admin-productos-secciones.component';

describe('AdminProductosSeccionesComponent', () => {
  let component: AdminProductosSeccionesComponent;
  let fixture: ComponentFixture<AdminProductosSeccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductosSeccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductosSeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
