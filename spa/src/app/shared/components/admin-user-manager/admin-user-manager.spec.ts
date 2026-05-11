import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserManager } from './admin-user-manager';

describe('AdminUserManager', () => {
  let component: AdminUserManager;
  let fixture: ComponentFixture<AdminUserManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUserManager],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUserManager);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
