import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepReferencias } from './step-referencias';

describe('StepReferencias', () => {
  let component: StepReferencias;
  let fixture: ComponentFixture<StepReferencias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepReferencias],
    }).compileComponents();

    fixture = TestBed.createComponent(StepReferencias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
