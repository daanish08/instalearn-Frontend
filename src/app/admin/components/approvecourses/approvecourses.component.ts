import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnrollmentServiceService } from '../../../user/services/enrollment-service/enrollment-service.service';

@Component({
  selector: 'app-approvecourses',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="container-fluid mt-4 px-5">
      <h2 class="text-left fw-light">
        Approve <span class="fw-semibold text-success">Enrollment Status</span>
        <hr />
      </h2>

      <table class="table table-bordered mt-4 table-hover">
        <thead class="table-success " style="color:blue">
          <tr>
            <th>Enrollment ID</th>
            <th>Username</th>
            <th>Course Title</th>
            <th>Current Status</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let enrollment of enrollments">
            <td>{{ enrollment.id }}</td>
            <td>{{ enrollment.username }}</td>
            <td>{{ enrollment.courseTitle }}</td>
            <td>{{ enrollment.status }}</td>
            <td>
              <select class="form-select" [(ngModel)]="enrollment.status">
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </td>
            <td>
              <button
                class="btn btn-success"
                (click)="updateStatus(enrollment)"
              >
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: ``,
})
export class ApprovecoursesComponent implements OnInit {
  enrollments: any[] = [];

  constructor(private enrollmentService: EnrollmentServiceService) {}

  ngOnInit(): void {
    this.loadEnrollmentList();
    // throw new Error('Method not implemented.');
  }

  loadEnrollmentList() {
    this.enrollmentService
      .getEnrollmentUsersList()
      .subscribe((response: any[]) => {
        this.enrollments = response;
        console.log(this.enrollments);
      });
  }


  updateStatus(enrollment: any) {
  
  }
}
