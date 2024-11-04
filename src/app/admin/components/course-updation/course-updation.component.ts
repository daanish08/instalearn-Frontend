import { Component, OnInit } from '@angular/core';
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
export class CourseUpdationComponent implements OnInit {
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
    this.loadDummyData();
  }

  loadDummyData(): void {
    const dummyData = {
      courseName: 'Introduction to TypeScript',
      description: 'This is a comprehensive course on TypeScript that covers all basics and advanced topics. It is designed for developers who wish to enhance their skills.',
      duration: 40,
      instructor: 'Jane Doe',
      driveURL: 'https://drive.google.com/example-course-material',
      githubURL: 'https://github.com/example-repo',
      videoURL: 'https://youtube.com/example-course-video',
    };

    // Simulate fetching data from an API
    this.courseName = dummyData.courseName;
    this.description = dummyData.description;
    this.duration = dummyData.duration;
    this.instructor = dummyData.instructor;
    this.driveURL = dummyData.driveURL;
    this.githubURL = dummyData.githubURL;
    this.videoURL = dummyData.videoURL;
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

    // Here you can later add a service call to submit the updated course data
    // For example:
    // this.courseService.updateCourse(courseData).subscribe(
    //   response => {
    //     this.isLoading = false;
    //     this.isSuccess = true;
    //     // Additional success handling here
    //   },
    //   error => {
    //     this.isLoading = false;
    //     // Handle error here
    //   }
    // );
  }
}
