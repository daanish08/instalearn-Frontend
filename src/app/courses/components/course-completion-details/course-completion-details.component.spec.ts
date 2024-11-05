import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCompletionDetailsComponent } from './course-completion-details.component';

describe('CourseCompletionDetailsComponent', () => {
  let component: CourseCompletionDetailsComponent;
  let fixture: ComponentFixture<CourseCompletionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCompletionDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCompletionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
