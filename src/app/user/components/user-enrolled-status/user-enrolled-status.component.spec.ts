import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEnrolledStatusComponent } from './user-enrolled-status.component';

describe('UserEnrolledStatusComponent', () => {
  let component: UserEnrolledStatusComponent;
  let fixture: ComponentFixture<UserEnrolledStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEnrolledStatusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserEnrolledStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
