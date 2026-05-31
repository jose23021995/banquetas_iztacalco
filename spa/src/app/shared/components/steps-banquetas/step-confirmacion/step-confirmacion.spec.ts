import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepConfirmacion } from './step-confirmacion';

describe('StepConfirmacion', () => {
  let component: StepConfirmacion;
  let fixture: ComponentFixture<StepConfirmacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepConfirmacion],
    }).compileComponents();

    fixture = TestBed.createComponent(StepConfirmacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
