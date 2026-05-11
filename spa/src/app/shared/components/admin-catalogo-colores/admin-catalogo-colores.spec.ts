import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCatalogoColores } from './admin-catalogo-colores';

describe('AdminCatalogoColores', () => {
  let component: AdminCatalogoColores;
  let fixture: ComponentFixture<AdminCatalogoColores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCatalogoColores],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCatalogoColores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
