import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCatalogoFachadas } from './admin-catalogo-fachadas';

describe('AdminCatalogoFachadas', () => {
  let component: AdminCatalogoFachadas;
  let fixture: ComponentFixture<AdminCatalogoFachadas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCatalogoFachadas],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCatalogoFachadas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
