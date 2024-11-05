import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseServiceService } from '../../services/courses/course-service.service';
import { LoginService } from '../../../login/services/login.service';
import { DomSanitizer } from '@angular/platform-browser';

interface Course {
  sanitizedCourseURL: any;
  image: string;
  courseName: string;
  description: string;
  duration: string;
  instructor: string;
  githubURL: string;
  driveURL: string;
  courseURL: string;
}

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  course!: Course;
  courseId: any;
  currentStep: number = 1;
  userRole: string | null = '';

  // githubUrl: string = 'https://github.com/GitTSUser/JavaFSD_Ford_Aug_2024';

  //git and drive opening link
  openLink(url: string) {
    console.log(url);
    window.open(url, '_blank');
  }

  constructor(
    private courseService: CourseServiceService,
    private route: ActivatedRoute,
    private loginService: LoginService,
    public sanitizer: DomSanitizer
  ) {
    // Reading the url param
    this.courseId = this.route.snapshot.paramMap.get('id');
    console.log('Course ID:', this.courseId);
  }

  //course = {
  //   image: '/assets/img/vectorIcons/createCourse.jpg',
  //   courseName: 'Advanced Angular Development',
  //   description: 'Deep dive into Angular development with hands-on projects and best practices.',
  //   duration: '8 weeks',
  //   instructor: 'Jane Doe',
  //   driveUrl: 'https://www.youtube.com/embed/0Z3I8TSUwLI?si=0PgPvV28zOX2CQ1r',
  //   githubUrl: 'https://www.youtube.com/embed/0Z3I8TSUwLI?si=0PgPvV28zOX2CQ1r',
  //   videoUrl: 'https://www.youtube.com/embed/0Z3I8TSUwLI?si=0PgPvV28zOX2CQ1r'
  // };

  ngOnInit(): void {
    console.log('Inside Course Details');
    this.loadCourseDetailsById(this.courseId);
    this.userRole = this.loginService.auth.role;
  }

  loadCourseDetailsById(id: number) {
    this.courseService.getcourseDetailsById(id).subscribe((response: any) => {
      console.log(response);
      this.course = response;

      // Sanitize the course URL
      this.course.sanitizedCourseURL =
        this.sanitizer.bypassSecurityTrustResourceUrl(this.course.courseURL);
    });
  }

  nextStep(): void {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
