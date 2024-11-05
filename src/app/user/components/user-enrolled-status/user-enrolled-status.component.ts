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
            <td>{{ enrollment.id }}</td>
            <td>{{ enrollment.courseTitle }}</td>
            <td>{{ enrollment.status }}</td>
            <td class="d-flex justify-content-center">
              <button
                class="btn fw-bold"
                style="width: 100px;"
                [ngClass]="{
                  'btn-success': enrollment.status === 'Approved',
                  'btn-warning': enrollment.status === 'Pending',
                  'btn-danger': enrollment.status === 'Rejected'
                }"
                [routerLink]="
                  enrollment.status === 'Approved'
                    ? ['/course', enrollment.id]
                    : null
                "
                [disabled]="enrollment.status !== 'Approved'"
              >
                {{
                  enrollment.status === 'Approved' ? 'View' : enrollment.status
                }}
              </button>
            </td>

            <td class="justify-content-center mx-5">
              <button
                class="btn fw-semibold text-white bg-danger"
                style="width: 100px;"
                [ngClass]="{
                  'bg-success': enrollment.status === 'Approved',
                  'bg-danger': enrollment.status === 'Rejected',
                  'bg-warning': enrollment.status === 'Pending',
                }"
                [routerLink]="
                  enrollment.status === 'Approved'
                    ? ['/course', enrollment.id]
                    : null
                "
                [disabled]="enrollment.status !== 'Approved'"
              >
                {{
                  enrollment.status === 'Approved'
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

  constructor(
    private loginService: LoginService,
    private enrollmentService: EnrollmentServiceService
  ) {}

  ngOnInit(): void {
    // this.findEnrollmentsByUserId(this.userId);
  }

  enrollments: any[] = [
    {
      id: 1,
      username: 'john_doe',
      courseTitle: 'Introduction to Angular',
      status: 'Pending',
    },
    {
      id: 2,
      username: 'jane_smith',
      courseTitle: 'Advanced JavaScript',
      status: 'Approved',
    },
    {
      id: 3,
      username: 'alice_jones',
      courseTitle: 'Data Science Basics',
      status: 'Rejected',
    },
    {
      id: 4,
      username: 'bob_brown',
      courseTitle: 'Web Development Bootcamp',
      status: 'Pending',
    },
    {
      id: 5,
      username: 'charlie_white',
      courseTitle: 'Machine Learning Fundamentals',
      status: 'Pending',
    },
  ];

  // findEnrollmentsByUserId(userId: string | null) {
  //   this.enrollmentService.getEnrollmentsListByUserId(userId)
  //       .subscribe((response: any[]) =>{
  //         this.enrollmennts=response;
  //         console.log(this.enrollmennts);
  //       })

  // // Call the API to update the enrollment status
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
