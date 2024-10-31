import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  standalone: true,
  imports: [RouterLink],
  template: `
   <div class="login-page d-flex bg-body-tertiary" style="height: 580px;">
  <div class="col-md-6 login-image"></div> 
    <div class="col-md-6 d-flex align-items-center justify-content-center"> 
      <form class="w-75" (ngSubmit)="onSubmit()">
          <h2 class="text-center mb-1 fw-light">Login As <span class="fw-bold text-success">USER</span></h2>
          <div class="form-group py-4">
              <label for="email" class="pb-1">Email address</label>
              <!-- [(ngModel)]="email" -->
              <input type="email"  name="email" class="form-control" id="email" placeholder="Enter email" required>
          </div>
          <div class="form-group py-1">
              <label for="password" class="pb-1">Password</label>
              <!-- [(ngModel)]="password"  -->
              <input type="password" name="password" class="form-control" id="password" placeholder="Password" required>
          </div>
          <button type="button" class="btn btn-success btn-block my-3 w-100" routerLink="/user/dashboard">Login</button>
          <div class="text-center mt-3">
              <a href="#" class="text-decoration-none text-secondary">Forgot password?</a>
          </div>
          <div class="text-center mt-2">
              <p class="text-body">Don't have an account? <a class="text-decoration-none text-secondary" routerLink="/register/user">Register here</a></p>
          </div>
      </form>
  </div>
</div>
  `,
 styles: `.login-page {
  height: 100vh; /* Full height for the page */
}

.login-image {
  background: url('/assets/loginPage.jpg') no-repeat center center; /* Absolute path */
  background-size: cover;
}`
})
export class UserloginComponent {
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
