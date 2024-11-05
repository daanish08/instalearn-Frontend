import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../services/admin-service/admin-service.service';
import { CommonModule } from '@angular/common';

interface User {
  userId: number;
  userName: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-fluid mt-4 px-5">
      <h2 class="text-left fw-light">
        List of <span class="fw-semibold text-success">Users</span>
        <hr />
      </h2>

      <table class="table table-bordered mt-4 table-hover">
        <thead class="table-success ">
          <tr>
            <th>S.No</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Phone No.</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of userList; let i = index">
            <td>{{ i + 1 }}</td>
            <td>{{ user.userId }}</td>
            <td>{{ user.userName }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: ``,
})
export class UserListComponent implements OnInit {
  // usersCount=
  userList: User[] = [];
  //Connect to the Service on load using dep Injection
  constructor(private adminService: AdminServiceService) {
    console.log('INSIDE ADMIN CONSTRUCTOR ');
  }

  ngOnInit(): void {
    this.adminService.getUserList().subscribe((response: any) => {
      console.log(response);
      this.userList = response;
    });
  }
}
