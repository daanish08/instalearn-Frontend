import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EnrollmentServiceService } from '../../services/enrollment-service/enrollment-service.service';
import { LoginService } from '../../../login/services/login.service';

@Component({
  selector: 'app-user-enrolled-status',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  template: `
    <div class="container-fluid mt-4 px-5">
      <h2 class="text-left fw-light">
        Enrolled <span class="fw-semibold text-success">Courses</span>
        <hr />
      </h2>

      <table class="table table-bordered mt-3 table-hover">
        <thead class="table-success" style="color:blue">
          <tr>
            <th>Enrollment ID</th>
            <th>Course Title</th>
            <th>Current Status</th>
            <th>Action</th>
            <th>Certificate</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let enrollment of enrollments">
            <td>{{ enrollment.enrollmentId }}</td>
            <td>{{ enrollment.course.courseName }}</td>
            <td>{{ enrollment.status }}</td>
            <td class="d-flex justify-content-center">
              <button
                class="btn fw-bold"
                style="width: 100px;"
                [ngClass]="{
                  'btn-success': enrollment.status === 'APPROVED',
                  'btn-warning': enrollment.status === 'PENDING',
                  'btn-danger': enrollment.status === 'REJECTED'
                }"
                [routerLink]="
                  enrollment.status === 'APPROVED'
                    ? ['/courses', enrollment.course.courseId]
                    : null
                "
                [disabled]="enrollment.status !== 'APPROVED'"
              >
                {{
                  enrollment.status === 'APPROVED' ? 'View' : enrollment.status
                }}
              </button>
            </td>

            <td class="justify-content-center mx-5">
              <button
                class="btn fw-semibold text-white bg-danger"
                style="width: 100px;"
                [ngClass]="{
                  'bg-success': enrollment.status === 'APPROVED',
                  'bg-danger': enrollment.status === 'REJECTED',
                  'bg-warning': enrollment.status === 'PENDING',
                }"
                [routerLink]="
                  enrollment.status === 'APPROVED'
                    ? ['/courses',enrollment.course.courseId,'completed']
                    : null
                "
                [disabled]="enrollment.status !== 'APPROVED'"
              >
                {{
                  enrollment.status === 'APPROVED'
                    ? 'Download'
                    : 'Complete'
                }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: ``
})
export class UserEnrolledStatusComponent implements OnInit {
  enrollmennts: any[] = [];
  userId: string | null = this.loginService.auth.id;
  IntId:number=Number(this.userId);

  constructor(
    private loginService: LoginService,
    private enrollmentService: EnrollmentServiceService
  ) {}

  ngOnInit(): void {
      this.findEnrolledCoursesByUserId(this.IntId);
  }

  enrollments: any[] = [];
    // enrollments: any[] = [
    //   {
    //     id: 1,
    //     username: 'john_doe',
    //     courseTitle: 'Introduction to Angular',
    //     status: 'Pending',
    //   },
    //   {
    //     id: 2,
    //     username: 'jane_smith',
    //     courseTitle: 'Advanced JavaScript',
    //     status: 'Approved',
    //   },
    //   {
    //     id: 3,
    //     username: 'alice_jones',
    //     courseTitle: 'Data Science Basics',
    //     status: 'Rejected',
    //   },
    //   {
    //     id: 4,
    //     username: 'bob_brown',
    //     courseTitle: 'Web Development Bootcamp',
    //     status: 'Pending',
    //   },
    //   {
    //     id: 5,
    //     username: 'charlie_white',
    //     courseTitle: 'Machine Learning Fundamentals',
    //     status: 'Pending',
    //   },
    // ];

  findEnrolledCoursesByUserId(userId :number) {
    this.enrollmentService.getEnrollmentsListByUserId(userId)
        .subscribe((response: any[]) =>{
          this.enrollments=response;
          console.log(this.enrollments);
        })

  // this.apiService.updateEnrollmentStatus(enrollment.id, enrollment.status).subscribe(response => {
  //   console.log('Status updated successfully:', response);
  //   // Optionally, you can show a success message or update the local state
  // }, error => {
  //   console.error('Error updating status:', error);
  //   // Handle error appropriately
  // });
  //   updateEnrollmentStatus(enrollmentId: number, status: string): Observable<any> {
  //     return this.http.put(`${this.baseApiUrl}/admin/enrollments/${enrollmentId}`, { status });
      }
    }
