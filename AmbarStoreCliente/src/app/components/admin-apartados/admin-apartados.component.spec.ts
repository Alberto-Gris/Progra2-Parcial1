import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApartadosComponent } from './admin-apartados.component';

describe('AdminApartadosComponent', () => {
  let component: AdminApartadosComponent;
  let fixture: ComponentFixture<AdminApartadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApartadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApartadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
