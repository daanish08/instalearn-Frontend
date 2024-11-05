import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HomeService } from './home.service';

// interface HomeCourse {
//   logo: string;
//   title: string;
//   description: string;
// }

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  courses: any = [];
  logo = 'course';
  constructor(private homeService: HomeService) {
    console.log('INSIDE HOME CONSTRUCTOR');
  }

  ngOnInit(): void {
    this.homeService.getCourses().subscribe((response: any) => {
      this.courses = response;
      console.log(this.courses);
    });
  }
  // courses = [
  //   { logo: 'C1', title: 'Course 1', description: 'Course 1 description goes here.' },
  //   { logo: 'C2', title: 'Course 2', description: 'Course 2 description goes here.' },
  //   { logo: 'C3', title: 'Course 3', description: 'Course 3 description goes here.' },
  //   { logo: 'C4', title: 'Course 4', description: 'Course 4 description goes here.' },
  //   { logo: 'C5', title: 'Course 5', description: 'Course 5 description goes here.' },
  //   { logo: 'C6', title: 'Course 6', description: 'Course 6 description goes here.' },
  //   { logo: 'C4', title: 'Course 7', description: 'Course 4 description goes here.' },
  //   { logo: 'C5', title: 'Course 8', description: 'Course 5 description goes here.' },
  //   { logo: 'C6', title: 'Course 9', description: 'Course 6 description goes here.' },
  //    { logo: 'C4', title: 'Course 10', description: 'Course 4 description goes here.' },
  //   { logo: 'C5', title: 'Course 11', description: 'Course 5 description goes here.' },
  //   { logo: 'C6', title: 'Course 12', description: 'Course 6 description goes here.' },
  //    { logo: 'C4', title: 'Course 13', description: 'Course 4 description goes here.' },
  //   { logo: 'C5', title: 'Course 14', description: 'Course 5 description goes here.' },
  //   { logo: 'C6', title: 'Course 15', description: 'Course 6 description goes here.' },
  // ];

  stepstoFindCourse = [
    {
      id: 1,
      head: 'Find the perfect tutor',
      description:
        'Connect with expert tutors tailored to your learning needs.',
    },
    {
      id: 2,
      head: 'Enroll your lesson',
      description:
        'Sign up for personalized lessons and start your journey today.',
    },
    {
      id: 3,
      head: 'Start the journey',
      description:
        'Embark on a path to success with tailored guidance and support.',
    },
  ];

  // features
  features = [
    {
      imgTag: '/assets/img/Home/graduate.png',
      title: 'Expert Tutors',
      description:
        'Connect with knowledgeable tutors who illuminate the path to understanding.',
    },
    {
      imgTag: '/assets/img/Home/graduate.png',
      title: 'Verified Profiles',
      description:
        'Access trustworthy profiles, ensuring quality and authenticity.',
    },
    {
      imgTag: '/assets/img/Home/graduate.png',
      title: 'Pay Per Lesson',
      description:
        'Enjoy flexibility with a pay-per-lesson model tailored to your needs.',
    },
    {
      imgTag: '/assets/img/Home/graduate.png',
      title: 'Affordable Prices',
      description:
        "Experience quality education at prices that won't break the bank.",
    },
  ];

  getAssetPath(filename: string): string {
    return `assets/home/${filename}`;
  }
}
