import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseServiceService } from '../../../courses/services/courses/course-service.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { AdmindashboardComponent } from '../admindashboard/admindashboard.component';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-coursecreation',
  standalone: true,
  imports: [CommonModule, FormsModule, AdmindashboardComponent],
  templateUrl: './coursecreation.component.html',
  styleUrls: ['./coursecreation.component.css'],
})
export class CoursecreationComponent implements OnInit {
  courseCreation: FormGroup | undefined;

  notyf = new Notyf();

  courseName: string = '';
  description: string = '';
  duration: number = 0;
  instructor: string = '';

  driveURL: string = '';
  githubURL: string = '';
  courseURL: string = '';

  currentStep: number = 1;
  progress: number = 50;

  isLoading: boolean = false;
  isSuccess: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private courseService: CourseServiceService,
  ) {
    // private toastService:ToastrService
  }

  ngOnInit(): void {
    // Initialize form or other setup logic here if needed
  }

  nextStep() {
    if (this.currentStep === 1) {
      this.currentStep = 2;
      this.progress = 100;
    }
  }

  prevStep() {
    if (this.currentStep === 2) {
      this.currentStep = 1;
      this.progress = 50;
    }
  }

  submitCourse() {
    const courseData = {
      courseName: this.courseName,
      description: this.description,
      duration: this.duration,
      instructor: this.instructor,
      driveURL: this.driveURL,
      githubURL: this.githubURL,
      courseURL: this.courseURL,
    };
    console.log(courseData);

    this.isLoading = true;
    this.isSuccess = false;

    this.courseService
      .getCoursesCreated(
        this.courseName,
        this.description,
        this.duration,
        this.instructor,
        this.courseURL,
        this.githubURL,
        this.driveURL,
      )
      .subscribe(
        (response) => {
          console.log('Course created successfully:', response);
          this.notyf.success('Your Course is successfully created!');
          this.isLoading = false;
          this.isSuccess = true;
          
        },
        (error) => {
          console.error('Error creating course:', error);
          this.notyf.error('Your changes have been successfully saved!');
          this.isLoading = false;
        },
      );

    setTimeout(() => {
      this.router.navigate(['/admin/dashboard']);
    }, 2000);
  }
}
