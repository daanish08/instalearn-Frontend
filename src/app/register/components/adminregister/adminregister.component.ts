import { Component } from '@angular/core';

@Component({
  selector: 'app-adminregister',
  standalone: true,
  imports: [],
  template: `
   <div class=" d-flex bg-body-tertiary" style="height: 580px;">
  <div class="col-md-6 register-image"></div> 
    <div class="col-md-6 d-flex align-items-center justify-content-center"> 
      <form class="w-75" (ngSubmit)="onSubmit()">
          <h2 class="text-center mb-1 fw-light">Register As <span class="fw-bold text-success">ADMIN</span></h2>
          <div class="form-group py-2">
              <label for="name" class="pb-1">Name</label>
              <!-- [(ngModel)]="name" -->
              <input type="text"  name="name" class="form-control" id="name" placeholder="Enter name" required>
          </div>
          <div class="form-group py-2">
              <label for="email" class="pb-1">Email address</label>
              <!-- [(ngModel)]="email" -->
              <input type="email"  name="email" class="form-control" id="email" placeholder="Enter email" required>
          </div>
          <div class="form-group py-2">
              <label for="phone" class="pb-1">Contact No.</label>
              <!-- [(ngModel)]="email" -->
              <input type="number"  name="contact" class="form-control" id="cnt_no" placeholder="Enter contact No." required>
          </div>
          <div class="form-group py-1">
              <label for="password" class="pb-1">Password</label>
              <!-- [(ngModel)]="password"  -->
              <input type="password" name="password" class="form-control" id="password" placeholder="Password" required>
          </div>
          <div class="form-group py-2">
              <label for="refCode" class="pb-1 ">Referrel Code</label>
              <!-- [(ngModel)]="password"  -->
              <input type="number" name="number" class="form-control" id="ref-code" placeholder="Referral Code" required>
          </div>

          <button type="submit" class="btn  btn-block my-3 w-100 text-white fw-semibold" style="background-color:green">Register</button>
  
      </form>
  </div>
</div>

  `,
  styles: `
  .register-page {
    height: 100vh; /* Full height for the page */
  }
  
  .register-image {
    background: url('/assets/RegisterPage.jpg') no-repeat center center; /* Absolute path */
    background-size: cover;
  }`
})
export class AdminregisterComponent {
  email: string = '';
  password: string = '';
  isAdmin: boolean = false; // Default to user login

  onSubmit() {
      if (this.isAdmin) {
          // Handle admin login logic
          console.log('Admin Login:', this.email, this.password);
      } else {
          // Handle user login logic
          console.log('User Login:', this.email, this.password);
      }
  }


}
