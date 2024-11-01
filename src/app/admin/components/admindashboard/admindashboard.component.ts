import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {

  userName="Daanish";

  adminDashBoardData = [
    {
        title: "Users List",
        count: 10,
        route: "/admin/users",
        buttonTitle: "View Users",
    },
    {
        title: "Feedbacks",
        count: 10,
        route: "/admin/feedback-details",
        buttonTitle: "View Feedbacks"
    },
    {
        title: "Enrolled Courses",
        count: 10,
        route: "/admin/courses",
        buttonTitle: "View Enrolled Courses",
    },
    {
        title: "Pending Approvals",
        count: 5,
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

  // viewUser(value){
  //   console.log(value);

  // }
}
