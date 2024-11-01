import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseServiceService } from '../../services/courses/course-service.service';

interface Course {
  imgTag:string,
  // title: string;
  courseName: string;
  description: string;
  duration: string;
  instructor: string;
  attachments: string[]; // URLs or names of attachments
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule,RouterLink],
  template: `
  <!-- <div class="container-">
   <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  <div class="col" *ngFor="let course of courses">
    <div class="card shadow-sm h-100">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
        role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
      </svg>
      <div class="card-body d-flex flex-column justify-content-between">
        <div>
          <h3 class="card-title">{{ course.title }}</h3>
          <p class="card-text mb-2"><strong>Course Name:</strong> {{ course.courseName }}</p>
          <p class="card-text mb-2"><strong>Description:</strong> {{ course.description }}</p>
          <p class="card-text mb-2"><strong>Duration:</strong> {{ course.duration }}</p>
          <p class="card-text mb-2"><strong>Instructor:</strong> {{ course.instructor }}</p>
        </div>
        <ul class="list-unstyled mb-4">
          <li *ngFor="let attachment of course.attachments">
            <a href="#" class="text-decoration-none">{{ attachment }}</a>
          </li>
        </ul>
        <div class="mt-auto">
          <button type="button" class="btn btn-primary btn-block" routerLink="/login">
            Enroll
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</div> -->


<div class="container-fluid py-4 px-5 col-lg-12 bg-body-tertiary">
<h2 class="text-left fw-light">List of <span class="fw-semibold text-success">Courses</span>
    <hr class="pb-2">
  </h2>
  <!-- Language Cards -->
  <div class="row">
    <div class="col-md-4 mb-4 px-3" *ngFor="let course of courses">
      <div class="card text-center  bg-white border-0 " style="width: 100%;max-height:100%;">
        <div class="card-body">
          <div class="d-inline-block pb-3">
          <img src="/assets/img/Home/graduate.png" class="card-img-top" width="50" height="50"alt="{{ course.courseName }}">
          </div>
          <h4 class="card-title"><a href="#"
              class=" text-decoration-none fw-semibold text-secondary">{{course.courseName}}</a></h4>
          <p class="card-text pb-2"><a href="#"
              class="text-muted text-decoration-none fw-normal  text-muted">{{course.description}}</a>
          </p>
          <a href="#" class="btn btn-success text-white fw-light" routerLink="/courses/1">View</a>
        </div>
      </div>
    </div>
  </div>
  <hr class="my-2">
</div>
  `,
  styles: ``
})
export class CoursesComponent implements OnInit{

  courses: Course[] =[];

  constructor(private courseService: CourseServiceService) {
    console.log("INSIDE CONSTRUCTOR");
  }

  
  ngOnInit(): void {
    this.courseService.getAllCourses()
      .subscribe((response:any)=>{
        this.courses=response;
        console.log(this.courses);
      })
  }


  // courses1: Course[] = [
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

