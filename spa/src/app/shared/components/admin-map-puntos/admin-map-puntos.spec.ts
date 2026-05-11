import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMapPuntos } from './admin-map-puntos';

describe('AdminMapPuntos', () => {
  let component: AdminMapPuntos;
  let fixture: ComponentFixture<AdminMapPuntos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMapPuntos],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminMapPuntos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
