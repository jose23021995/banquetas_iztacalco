import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPdfGenerator } from './admin-pdf-generator';

describe('AdminPdfGenerator', () => {
  let component: AdminPdfGenerator;
  let fixture: ComponentFixture<AdminPdfGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPdfGenerator],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPdfGenerator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
