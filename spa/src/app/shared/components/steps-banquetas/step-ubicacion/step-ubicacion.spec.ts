import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepUbicacion } from './step-ubicacion';

describe('StepUbicacion', () => {
  let component: StepUbicacion;
  let fixture: ComponentFixture<StepUbicacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepUbicacion],
    }).compileComponents();

    fixture = TestBed.createComponent(StepUbicacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
