import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepModalImagenes } from './step-modal-imagenes';

describe('StepModalImagenes', () => {
  let component: StepModalImagenes;
  let fixture: ComponentFixture<StepModalImagenes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepModalImagenes],
    }).compileComponents();

    fixture = TestBed.createComponent(StepModalImagenes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
