import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepBanqueta } from './step-banqueta';

describe('StepBanqueta', () => {
  let component: StepBanqueta;
  let fixture: ComponentFixture<StepBanqueta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepBanqueta],
    }).compileComponents();

    fixture = TestBed.createComponent(StepBanqueta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
