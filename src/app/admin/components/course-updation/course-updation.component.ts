import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseServiceService } from '../../../courses/services/courses/course-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-updation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-updation.component.html',
  styleUrl: './course-updation.component.css'
})
export class CourseUpdationComponent {
  courseCreation: FormGroup | undefined;

  courseName: string = '';
  description: string = '';
  duration: number = 0;
  instructor: string = '';

  driveURL: string = '';
  githubURL: string = '';
  videoURL: string = '';

  currentStep: number = 1;
  progress: number = 50;

  isLoading: boolean = false;
  isSuccess: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private toastr: ToastrService,
    private courseService: CourseServiceService
  ) { }

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
      videoURL: this.videoURL,
      
    };
    console.log(courseData);

    this.isLoading = true;
    this.isSuccess = false;
  }
 
}
