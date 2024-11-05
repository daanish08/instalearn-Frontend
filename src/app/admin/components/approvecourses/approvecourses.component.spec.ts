import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovecoursesComponent } from './approvecourses.component';

describe('ApprovecoursesComponent', () => {
  let component: ApprovecoursesComponent;
  let fixture: ComponentFixture<ApprovecoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovecoursesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApprovecoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
