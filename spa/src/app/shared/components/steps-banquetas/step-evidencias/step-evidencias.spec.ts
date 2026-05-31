import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepEvidencias } from './step-evidencias';

describe('StepEvidencias', () => {
  let component: StepEvidencias;
  let fixture: ComponentFixture<StepEvidencias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepEvidencias],
    }).compileComponents();

    fixture = TestBed.createComponent(StepEvidencias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
