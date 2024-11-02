import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserServiceService } from '../../services/user-service/user-service.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  template: `
    <div class="container-fluid  px-5 bg-body-tertiary">
  <h1 class="text-left fw-light pt-4 pb-4">Welcome, <span class="fw-bold text-success">{{userName}}</span></h1>
  <div class="row text-center mb-4">
    <div *ngFor="let data of userDashBoardData" class="col-md-4">
        <div class="card border mb-3">
            <div class="card-header fw-light bg-success text-white">{{ data.title }}</div>
            <div class="card-body bg-body-tertiary">
                <h5 class="card-title fs-3 text-muted pb-2" >{{ data.count }}</h5>
                <a [routerLink]="data.route" class="btn btn-success fw-bold">{{ data.buttonTitle }}</a>
            </div>
        </div>
    </div>
</div>
<div class="row mb-2  bg-body-tertiary"  style="padding-left: 80px; padding-right: 80px;">
  <div class="col-md-12 px-5">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" *ngFor="let card of courseManagementCards">
          <div class="col-auto d-none d-lg-block">
              <img [src]="card.image" class="bd-placeholder-img" width="300" height="280" alt="Thumbnail" />
          </div>
          <div class="col p-5 d-flex flex-column position-static ">
              <h3 class="mb-1 fw-semibold pt-3">{{ card.title }}</h3>
              <div class="mb-1 text-muted fs-6 pb-3">{{ card.description }}</div>
              <a [routerLink]="card.route" class="btn btn-success fw-light" style="width:35%">{{ card.buttonText }}</a>
          </div>
      </div>
  </div>
</div>

</div>
  `,
  styles: ``
})
export class UserDashboardComponent implements OnInit{

  userName="daanish"
 
 

  constructor(private http: HttpClient) { } // Inject HttpClient

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData() {
    // Make separate API calls for each count
    this.getEnrolledCoursesCount().subscribe(count => this.userDashBoardData[0].count = count);
    this.getAvailableCoursesCount().subscribe(count => this.userDashBoardData[1].count = count);
    this.getApprovalStatusCount().subscribe(count => this.userDashBoardData[2].count = count);
  }

  getEnrolledCoursesCount(): Observable<number> {
    return this.http.get<number>('/api/user/enrolled-courses-count'); // Replace with your API endpoint
  }

  getAvailableCoursesCount(): Observable<number> {
    return this.http.get<number>('http://localhost:8080/instalearn/api/v1/course/count'); // Replace with your API endpoint
  }

  getApprovalStatusCount(): Observable<number> {
    return this.http.get<number>('/api/admin/approval-count'); // Replace with your API endpoint
  }


  userDashBoardData = [
    {
        title: "Enrolled Courses",
        count: 10,
        route: "/user/enroll-courses",
        buttonTitle: "View Enrolled",
    },
    {
        title: "Available Courses",
        count: 10,
        route: "/courses",
        buttonTitle: "View Courses",
    },
    {
        title: "Approval Status",
        count: 5,
        route: "/admin/approve-courses",
        buttonTitle: "View Status",
    }
];


courseManagementCards = [
  {
      title: "Enroll New Course",
      description: "Efficiently design, implement, and oversee your courses with streamlined processes and comprehensive management tools.",
      buttonText: "Enroll Now",
      route: "/courses", // Route to navigate to the create course page
      image: "/assets/EnrollCourse.jpg" // Path to the image
  },
  {
      title: "Approve Enrollments",
      description: "Conduct thorough evaluations and authorize user enrollments to ensure a high-quality learning experience and effective course participation.",
      buttonText: "Review Now",
      route: "/admin/approve-courses", // Route to navigate to the course approvals page
      image: "/assets/EnrollCourse.jpg"  // Path to the image
  },

];

}
