import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  courses: any = [];
  logo = 'Course';
  constructor(private homeService: HomeService) {
    console.log('INSIDE HOME CONSTRUCTOR');
  }

  ngOnInit(): void {
    this.homeService.getCourses().subscribe((response: any) => {
      this.courses = response;
      console.log(this.courses);
    });
  }
  
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
      imgTag: '/assets/img/Home/verified.png',
      title: 'Verified Profiles',
      description:
        'Access trustworthy profiles, ensuring quality and authenticity.',
    },
    {
      imgTag: '/assets/img/Home/payPerPerson.png',
      title: 'Pay Per Lesson',
      description:
        'Enjoy flexibility with a pay-per-lesson model tailored to your needs.',
    },
    {
      imgTag: '/assets/img/Home/price.png',
      title: 'Affordable Prices',
      description:
        "Experience quality education at prices that won't break the bank.",
    },
  ];

  getAssetPath(filename: string): string {
    return `assets/home/${filename}`;
  }
}
