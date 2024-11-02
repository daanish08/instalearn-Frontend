import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Course {
  image: string;
  title: string;
  description: string;
  duration: string;
  instructor: string;
 githubUrl:string,
 driveUrl:string,
  videoUrl: string;
}

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course!: Course;
  currentStep: number = 1;

  openLink(url: string) {
    window.open(url, '_blank');
  }
  

  ngOnInit(): void {
    this.course = {
      image: '/assets/img/vectorIcons/createCourse.jpg',
      title: 'Advanced Angular Development',
      description: 'Deep dive into Angular development with hands-on projects and best practices.',
      duration: '8 weeks',
      instructor: 'Jane Doe',
      driveUrl: 'https://www.youtube.com/embed/0Z3I8TSUwLI?si=0PgPvV28zOX2CQ1r',
      githubUrl: 'https://www.youtube.com/embed/0Z3I8TSUwLI?si=0PgPvV28zOX2CQ1r',
      videoUrl: 'https://www.youtube.com/embed/0Z3I8TSUwLI?si=0PgPvV28zOX2CQ1r'
    };
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
