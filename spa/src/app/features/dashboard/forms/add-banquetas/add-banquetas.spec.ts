import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBanquetas } from './add-banquetas';

describe('AddBanquetas', () => {
  let component: AddBanquetas;
  let fixture: ComponentFixture<AddBanquetas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBanquetas],
    }).compileComponents();

    fixture = TestBed.createComponent(AddBanquetas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
