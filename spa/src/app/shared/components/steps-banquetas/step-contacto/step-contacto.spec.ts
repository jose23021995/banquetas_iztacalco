import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepContacto } from './step-contacto';

describe('StepContacto', () => {
  let component: StepContacto;
  let fixture: ComponentFixture<StepContacto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepContacto],
    }).compileComponents();

    fixture = TestBed.createComponent(StepContacto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
