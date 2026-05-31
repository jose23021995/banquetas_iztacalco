import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepModalCatalogos } from './step-modal-catalogos';

describe('StepModalCatalogos', () => {
  let component: StepModalCatalogos;
  let fixture: ComponentFixture<StepModalCatalogos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepModalCatalogos],
    }).compileComponents();

    fixture = TestBed.createComponent(StepModalCatalogos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
