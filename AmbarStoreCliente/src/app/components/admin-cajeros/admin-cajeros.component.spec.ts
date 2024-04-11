import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCajerosComponent } from './admin-cajeros.component';

describe('AdminCajerosComponent', () => {
  let component: AdminCajerosComponent;
  let fixture: ComponentFixture<AdminCajerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCajerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
