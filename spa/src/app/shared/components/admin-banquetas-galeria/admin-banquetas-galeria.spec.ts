import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBanquetasGaleria } from './admin-banquetas-galeria';

describe('AdminBanquetasGaleria', () => {
  let component: AdminBanquetasGaleria;
  let fixture: ComponentFixture<AdminBanquetasGaleria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBanquetasGaleria],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminBanquetasGaleria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
