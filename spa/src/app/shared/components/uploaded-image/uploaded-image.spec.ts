import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedImage } from './uploaded-image';

describe('UploadedImage', () => {
  let component: UploadedImage;
  let fixture: ComponentFixture<UploadedImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadedImage],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadedImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
