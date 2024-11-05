import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseUpdationComponent } from './course-updation.component';

describe('CourseUpdationComponent', () => {
  let component: CourseUpdationComponent;
  let fixture: ComponentFixture<CourseUpdationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseUpdationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
