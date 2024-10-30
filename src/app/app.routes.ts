import { Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { AboutComponent } from './about/components/about/about.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { CoursesComponent } from './courses/components/courses/courses.component';
import { LoginComponent } from './login/components/login/login.component';
import { RegisterComponent } from './register/components/register/register.component';


//config the routes
export const routes: Routes = [
  { path: '', component: HomeComponent, title: "Home Page" },
  { path: 'courses', component: CoursesComponent, title: "Courses" },
  { path: 'courses', component: CoursesComponent, title: "Courses" },
  { path: 'login', component: LoginComponent, title: "Login Now" },
  { path: 'register', component: RegisterComponent, title: "Register Now" },
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

