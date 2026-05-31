import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepModalGps } from './step-modal-gps';

describe('StepModalGps', () => {
  let component: StepModalGps;
  let fixture: ComponentFixture<StepModalGps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepModalGps],
    }).compileComponents();

    fixture = TestBed.createComponent(StepModalGps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
