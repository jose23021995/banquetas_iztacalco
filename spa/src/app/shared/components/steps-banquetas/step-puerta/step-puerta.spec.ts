import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPuerta } from './step-puerta';

describe('StepPuerta', () => {
  let component: StepPuerta;
  let fixture: ComponentFixture<StepPuerta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepPuerta],
    }).compileComponents();

    fixture = TestBed.createComponent(StepPuerta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
