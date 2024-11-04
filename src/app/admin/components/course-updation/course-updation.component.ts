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
  courseUpdation: FormGroup | undefined;
  courseArray:any=[];


  courseId: number =11;
  adminId: number = 2;

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
    private courseService: CourseServiceService
  ) { }

  ngOnInit(): void {
    this.loadCourseData(this.courseId);
  }

  loadCourseData(courseId: number) {
    // Indicate loading started
    // this.isLoading = true;
    this.courseService.getcourseDetailsById(courseId)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.courseArray = response; // Ensure courseArray is the correct type
  
          // Now update the properties after receiving the response
          this.courseName = this.courseArray.courseName;
          this.description = this.courseArray.description;
          this.duration = this.courseArray.duration;
          this.instructor = this.courseArray.instructor;
          this.driveURL = this.courseArray.driveURL;
          this.githubURL = this.courseArray.githubURL;
          this.courseURL = this.courseArray.courseURL;
  
        },
        error => {
          console.error("Error loading course data:", error);
          // Handle error here
        }
      );
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

  updateCourse() {
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

    // Here you can later add a service call to submit the updated course data
    // For example:
    this.courseService.handleupdateCourse(courseData, this.adminId, this.courseId)
      .subscribe(
        response => {
          // console.log("Updating the course"+response);
          this.isLoading = false;
          this.isSuccess = true;
          console.log("Course updated successfully:", response);
          // Additional success handling here
        },
        error => {
          console.log("error occued")
          this.isLoading = false;
          // Handle error here
        }
      );
  }
}
