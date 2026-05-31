import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFachada } from './step-fachada';

describe('StepFachada', () => {
  let component: StepFachada;
  let fixture: ComponentFixture<StepFachada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepFachada],
    }).compileComponents();

    fixture = TestBed.createComponent(StepFachada);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
