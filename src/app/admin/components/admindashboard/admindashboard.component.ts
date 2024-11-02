import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminServiceService } from '../../services/admin-service/admin-service.service';

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent implements OnInit{

  constructor(private adminService: AdminServiceService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  userName="Daanish";

  adminDashBoardData = [
    {
        title: "Users List",
        count: 0,
        route: "/admin/user-list",
        buttonTitle: "View Users",
    },
    {
        title: "Feedbacks",
        count: 0,
        route: "/admin/feedback-details",
        buttonTitle: "View Feedbacks"
    },
    {
        title: "Enrolled Courses",
        count: 0,
        route: "/admin/courses",
        buttonTitle: "View Enrolled Courses",
    },
    {
        title: "Pending Approvals",
        count: 0,
        route: "/admin/approve-courses",
        buttonTitle: "View Pending Approvals",
    }
];


courseManagementCards = [
  {
      title: "Create Course",
      description: "Efficiently design, implement, and oversee your courses with streamlined processes and comprehensive management tools.",
      buttonText: "Create Now",
      route: "/admin/create-courses", // Route to navigate to the create course page
      image: "/assets/img/vectorIcons/createCourse.jpg" // Path to the image
  },
  {
      title: "Update Course",
      description: "Efficiently design, implement, and oversee your courses with streamlined processes and comprehensive management tools.",
      buttonText: "Update Now",
      route: "/admin/update-courses", // Route to navigate to the course approvals page
      image: "/assets/img/vectorIcons/enrollCourse.jpg" // Path to the image
  },
  {
    title: "Approve Enrollments",
    description: "Conduct thorough evaluations and authorize user enrollments to ensure a high-quality learning experience and effective course participation.",
    buttonText: "Review Now",
    route: "/admin/approve-courses", // Route to navigate to the course approvals page
    image: "/assets/img/vectorIcons/enrollCourse.jpg" // Path to the image
},

];




  uploadCourse() {
    console.log("Hi")
  }

  loadDashboardData() {
    this.adminService.getUserCount().subscribe(count => {
      this.adminDashBoardData[0].count = count;
    });

    this.adminService.getFeedbackCount().subscribe(count => {
      this.adminDashBoardData[1].count = count;
    });

    this.adminService.getEnrolledCoursesCount().subscribe(count => {
      this.adminDashBoardData[2].count = count;
    });

    this.adminService.getPendingApprovalsCount().subscribe(count => {
      this.adminDashBoardData[3].count = count;
    });
  }

}
