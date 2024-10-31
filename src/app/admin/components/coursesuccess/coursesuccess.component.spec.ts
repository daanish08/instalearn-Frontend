import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesuccessComponent } from './coursesuccess.component';

describe('CoursesuccessComponent', () => {
  let component: CoursesuccessComponent;
  let fixture: ComponentFixture<CoursesuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
