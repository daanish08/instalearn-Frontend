import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-enrolled-status',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  template: `
   <div class="container-fluid mt-4 px-5">
  <h2 class="text-left fw-light">Enrolled <span class="fw-semibold text-success">Courses</span>
    <hr>
  </h2>

  <table class="table table-bordered mt-4 table-hover">
    <thead class="table-success" style="color:blue">
      <tr>
        <th>Enrollment ID</th>
        <th>Username</th>
        <th>Course Title</th>
        <th>Current Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let enrollment of enrollments">
        <td>{{ enrollment.id }}</td>
        <td>{{ enrollment.username }}</td>
        <td>{{ enrollment.courseTitle }}</td>
        <td>{{ enrollment.status }}</td>
        <td class="d-flex justify-content-center  ">
          <button 
            class="btn fw-bold"
            style="width: 100px;"
            [ngClass]="{
              'btn-success': enrollment.status === 'Approved',
              'btn-warning': enrollment.status === 'Pending',
              'btn-danger': enrollment.status === 'Rejected'
            }"
            [routerLink]="enrollment.status === 'Approved' ? ['/course', enrollment.id] : null"
            [disabled]="enrollment.status !== 'Approved'">
            {{ enrollment.status === 'Approved' ? 'View' : (enrollment.status === 'Pending' ? 'Pending' : 'Rejected') }}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

  `,
  styles: ``
})
export class UserEnrolledStatusComponent {
  enrollments: any[] = [
    { id: 1, username: 'john_doe', courseTitle: 'Introduction to Angular', status: 'Pending' },
    { id: 2, username: 'jane_smith', courseTitle: 'Advanced JavaScript', status: 'Approved' },
    { id: 3, username: 'alice_jones', courseTitle: 'Data Science Basics', status: 'Rejected' },
    { id: 4, username: 'bob_brown', courseTitle: 'Web Development Bootcamp', status: 'Pending' },
    { id: 5, username: 'charlie_white', courseTitle: 'Machine Learning Fundamentals', status: 'Pending' }
  ];

  // constructor(private apiService: ApiService) {}

  openCourse(enrollment: any) {
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
  // }
  
  }

}
