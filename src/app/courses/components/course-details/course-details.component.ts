import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseServiceService } from '../../services/courses/course-service.service';

interface Course {
  image: string;
  courseName: string;
  description: string;
  duration: string;
  instructor: string;
 githubUrl:string,
 driveUrl:string,
  courseUrl: string;
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
  courseId:any;
  currentStep: number = 1;


  //git and drive opening link
  openLink(url: string) {
    window.open(url, '_blank');
  }

  constructor(private courseService: CourseServiceService, private route: ActivatedRoute) {
    // Reading the url param
    this.courseId = this.route.snapshot.paramMap.get('id');
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
 
  }

  loadCourseDetailsById(id:number){
    this.courseService.getcourseDetailsById(id)
    .subscribe((response: any) => {
      console.log(response);
      this.course = response;
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
