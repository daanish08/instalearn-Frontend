import { Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { AboutComponent } from './about/components/about/about.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { CoursesComponent } from './courses/components/courses/courses.component';
import { AdminloginComponent } from './login/components/adminlogin/adminlogin.component';
import { UserloginComponent } from './login/components/userlogin/userlogin.component';
import { UserregisterComponent } from './register/components/userregister/userregister.component';
import { AdminregisterComponent } from './register/components/adminregister/adminregister.component';
import { AdmindashboardComponent } from './admin/components/admindashboard/admindashboard.component';
import { CoursecreationComponent } from './admin/components/coursecreation/coursecreation.component';
import { ApprovecoursesComponent } from './admin/components/approvecourses/approvecourses.component';
import { CourseDetailsComponent } from './courses/components/course-details/course-details.component';
import { UserDashboardComponent } from './user/components/user-dashboard/user-dashboard.component';
import { UserEnrolledStatusComponent } from './user/components/user-enrolled-status/user-enrolled-status.component';
import { CourseCompletionDetailsComponent } from './courses/components/course-completion-details/course-completion-details.component';
import { FeedbackDetailsComponent } from './admin/components/feedback-details/feedback-details.component';
import { UserListComponent } from './admin/components/user-list/user-list.component';
import { ProfileComponent } from './admin/components/profile/profile/profile.component';
import { UserProfileComponent } from './user/components/user-profile/user-profile/user-profile.component';


//config the routes
export const routes: Routes = [
  { path: '', component: HomeComponent, title: "Home Page" },
  { path: 'courses', component: CoursesComponent, title: "Courses" },
  { path: 'courses', component: CoursesComponent, title: "Courses" },
  { path: 'login', 
    children:[{ path: 'user', component: UserloginComponent, title: "User Login" },
    {path:'admin',component: AdminloginComponent, title: "Admin Login" }
  ] },
  { path: 'register', 
    children:[{ path: 'user', component: UserregisterComponent, title: "User Registration" },
                {path:'admin',component: AdminregisterComponent, title: "Admin Registration" }
    ] 
  },
  {
    path: 'admin',
    children: [
        { path: 'profile', component: ProfileComponent, title: 'Admin Profile' },
        { path: 'dashboard', component: AdmindashboardComponent, title: 'Admin Dashboard' },
        { path: 'create-courses', component: CoursecreationComponent, title: 'Create Course' },
        { path: 'user-list', component: UserListComponent, title: 'User List' },
        { path: 'approve-courses', component: ApprovecoursesComponent, title: 'Approve Courses' },
        { path: 'feedback-details', component: FeedbackDetailsComponent, title: 'Feedbacks' }
    ]
}, {
  path: 'user',
  children: [
    { path: 'profile', component: UserProfileComponent, title: 'User Profile' },  
    { path: 'dashboard', component: UserDashboardComponent, title: 'User Dashboard' },
      { path: 'courses', component: CoursecreationComponent, title: 'View Course' },
      { path: 'enroll-courses', component: UserEnrolledStatusComponent, title: 'Enroll Courses' },
      { path: 'enroll-courses/:enrollId/', component: UserEnrolledStatusComponent, title: 'Enroll Courses' },
  ]
},{
  path: 'courses',
  children: [
      { path: '', component: CoursesComponent, title: 'All Courses' }, // Default route to show all courses
      { path: 'admin/:adminId', component: CoursesComponent, title: 'Courses by Admin' }, // Specific courses by admin
      { path: ':courseId', component: CourseDetailsComponent, title: 'Detailed View of Course' }, // Detailed view of a specific course
      { path: 'user/:userId', component: CoursesComponent, title: 'Courses Enrolled By Users' }, // Courses enrolled by a specific user
      {path:':courseId/completed',component:CourseCompletionDetailsComponent ,title:'Course Completion Details'}//Completion Page of the specific users
    ]
},



  // {path:'admin',children:[
  //   {path:}
  // ]}
  // {
  //     path: 'employees', children: [
  //         { path: 'add', component: AddEmployeeComponent, title: "Employee List" },
  //         { path: ':id', component: EmployeeDetailsComponent, title: "Employee List" },
  //         { path: ':id/edit', component: UpdateEmployeeComponent, title: "Employee List" },
  //         { path: '', component: ListEmployeesComponent, title: "Employee List" },
  //     ]
  // },    
  { path: 'about', component: AboutComponent, title: "About" },
  { path: 'contact', component: ContactComponent, title: "Contact" }
];

