import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcelGenerator } from './admin-excel-generator';

describe('AdminExcelGenerator', () => {
  let component: AdminExcelGenerator;
  let fixture: ComponentFixture<AdminExcelGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminExcelGenerator],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminExcelGenerator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
