import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CourseServiceService } from '../../services/courses/course-service.service';
import { LoginService } from '../../../login/services/login.service';

interface Course {
  courseId: number;
  imgTag: string;
  courseName: string;
  description: string;
  duration: string;
  instructor: string;
  courseURL: string;
  githubURL: string;
  driveURL: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container-fluid py-4 px-5 col-lg-12 bg-body-tertiary">
      <h2 class="text-left fw-light">
        List of <span class="fw-semibold text-success">Courses</span>
        <hr class="pb-2" />
      </h2>
      <!-- Language Cards -->
      <div class="row">
        <div class="col-md-4 mb-4 px-3" *ngFor="let course of courses">
          <div
            class="card text-center  bg-white border-0 "
            style="width: 100%;max-height:100%;"
          >
            <div class="card-body">
              <div class="d-inline-block pb-3">
                <img
                  src="/assets/img/Home/graduate.png"
                  class="card-img-top"
                  width="50"
                  height="50"
                  alt="{{ course.courseName }}"
                />
              </div>
              <h4 class="card-title">
                <a
                  href="#"
                  class=" text-decoration-none fw-semibold text-secondary"
                  >{{ course.courseName }}</a
                >
              </h4>
              <p class="card-text pb-2">
                <a
                  href="#"
                  class="text-muted text-decoration-none fw-normal  text-muted"
                  >{{ course.instructor }}</a
                >
              </p>
              <button
                *ngIf="userRole === 'USER' || userRole === null"
                class="btn btn-success me-md-2 text-white fw-light"
                (click)="enroll(course.courseId)"
                [disabled]="isEnrolling"
              >
                Enroll
              </button>

              <!-- ADMIN BUTTONS -->
              <button
                *ngIf="userRole === 'ADMIN'"
                class="btn btn-success me-md-2 text-white fw-light"
                (click)="view(course.courseId)"
              >
                View
              </button>
              <!-- Role-based buttons -->
              <button
                *ngIf="userRole === 'ADMIN'"
                class="btn btn-primary me-md-2 text-white fw-light"
                (click)="editCourse(course.courseId)"
              >
                Edit
              </button>
              <button
                *ngIf="userRole === 'ADMIN'"
                class="btn btn-danger me-md-2 text-white fw-light"
                (click)="deleteCourse(course.courseId)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-2" />
    </div>
  `,
  styles: ``,
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  userRole: string | null = '';
  adminId: string | null = this.loginService.auth.id;

  isEnrolling: boolean = false;

  constructor(
    private courseService: CourseServiceService,
    private router: Router,
    private loginService: LoginService,
  ) {
    console.log('INSIDE course CONSTRUCTOR');
  }

  ngOnInit(): void {
    if (this.getUserRole() === 'ADMIN') {
      this.getCoursesByAdminId(this.adminId);

      console.log('Admin');
    } else {
      console.log('User');
      this.courseService.getAllCourses().subscribe((response: any) => {
        this.courses = response;
        console.log(this.courses);
      });
    }

    this.getUserRole(); // Add this line to fetch the user's role
  }

  enroll(courseId: number) {
    isEnrolling: true;
    this.courseService.enrollInCourse(courseId).subscribe({
      next: (response: string) => {
        console.log('Enrollment successful:', response);
        alert('Enrollment successful!');
        this.isEnrolling = false;
      },
      error: (error) => {
        console.error('Enrollment failed:', error);
        alert('Enrollment failed. Please Login and try again.');
      },
    });
  }

  view(courseId: number) {
    this.router.navigate(['/courses', courseId]);
    this.courseService.getcourseDetailsById(courseId).subscribe({
      next: (response: any) => {
        this.courses = response;
        console.log('Enrollment successful:', response);
      },
      error: (error) => {
        console.error('Enrollment failed:', error);
      },
    });
  }

  edit(courseId: number, adminId: string | null) {
    this.router.navigate(['admin/update', courseId]);
    console.log(courseId);
    this.courseService.getcourseDetailsById(courseId).subscribe({
      next: (response: any) => {
        this.courses = response;
        // console.log(this.courses)
        console.log('Enrollment successful:', response);
      },
      error: (error) => {
        console.error('Enrollment failed:', error);
      },
    });
  }

  delete(courseId: number, adminId: number) {
    this.courseService.deleteCourse(adminId, courseId).subscribe({
      next: (response: any) => {
        console.log('Deleted successful:', response);
        alert('Deleted successful!');

        this.courses = this.courses.filter(
          (course) => course.courseId !== courseId,
        );
      },
      error: (error) => {
        console.error('Deleted failed:', error);
        alert('Deleted failed. Please try again.');
      },
    });
  }

  getCoursesByAdminId(adminId: string | null) {
    this.courseService
      .getCoursesByAdminId(adminId)
      .subscribe((response: any) => {
        this.courses = response;
        console.log(this.courses);
      });
  }

  // New method to fetch user role
  getUserRole(): string | null {
    this.userRole = this.loginService.auth.role;
    return this.userRole;
  }

  // Placeholder methods for edit and delete actions
  editCourse(courseId: number): void {
    this.edit(courseId, this.adminId);
    console.log('Edited course:', courseId);
    // Implement the edit logic here
  }

  Intid = Number(this.adminId);
  deleteCourse(courseId: number): void {
    this.delete(courseId, this.Intid);
    console.log('Delete course:', courseId);
    // Implement the delete logic here
  }

  //   {
  //     imgTag:'/assets/img/Home/graduate.png',
  //     title: 'Beginner Spanish',
  //     courseName: 'Spanish 101',
  //     description: 'Learn the basics of Spanish, including vocabulary, grammar, and pronunciation.',
  //     duration: '6 weeks',
  //     instructor: 'Maria Gomez',
  //     attachments: ['syllabus.pdf', 'intro-video.mp4']
  //   },
  //   {
  //     imgTag:'/assets/img/Home/graduate.png',
  //     title: 'Intermediate French',
  //     courseName: 'French Intermediate',
  //     description: 'Enhance your French skills with intermediate-level vocabulary and conversation practice.',
  //     duration: '8 weeks',
  //     instructor: 'Jean Dupont',
  //     attachments: ['course-outline.pdf', 'audio-lessons.zip']
  //   },
  //   {
  //     imgTag:'/assets/img/Home/graduate.png',
  //     title: 'Advanced English Grammar',
  //     courseName: 'English Grammar Mastery',
  //     description: 'Master complex grammar structures and improve your writing skills in English.',
  //     duration: '4 weeks',
  //     instructor: 'John Smith',
  //     attachments: ['grammar-guide.pdf', 'practice-exercises.docx']
  //   },
  //   {
  //     imgTag:'/assets/img/Home/graduate.png',
  //     title: 'Japanese for Travelers',
  //     courseName: 'Japanese Travel Essentials',
  //     description: 'Get ready for your trip to Japan with essential phrases and cultural insights.',
  //     duration: '3 weeks',
  //     instructor: 'Hiroshi Tanaka',
  //     attachments: ['phrasebook.pdf', 'cultural-tips.mp4']
  //   },
  //   {
  //     imgTag:'/assets/img/Home/graduate.png',
  //     title: 'Business English',
  //     courseName: 'Professional English',
  //     description: 'Improve your professional English communication skills for the workplace.',
  //     duration: '5 weeks',
  //     instructor: 'Emily Chen',
  //     attachments: ['business-vocab.pdf', 'meeting-simulations.mp4']
  //   },
  //   {
  //     imgTag:'/assets/img/Home/graduate.png',
  //     title: 'German Literature',
  //     courseName: 'Exploring German Literature',
  //     description: 'Explore classic and contemporary German literature with expert guidance.',
  //     duration: '10 weeks',
  //     instructor: 'Friedrich Müller',
  //     attachments: ['reading-list.pdf', 'lecture-notes.docx']
  //   }
  // ];
}
