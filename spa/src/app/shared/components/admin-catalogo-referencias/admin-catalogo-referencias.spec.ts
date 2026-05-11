import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCatalogoReferencias } from './admin-catalogo-referencias';

describe('AdminCatalogoReferencias', () => {
  let component: AdminCatalogoReferencias;
  let fixture: ComponentFixture<AdminCatalogoReferencias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCatalogoReferencias],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCatalogoReferencias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
