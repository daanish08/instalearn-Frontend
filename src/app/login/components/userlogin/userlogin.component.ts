import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-userlogin',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  template: `
    <div class="login-page d-flex bg-body-tertiary" style="height: 580px;">
      <div class="col-md-6 login-image"></div>
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <form class="w-75" (ngSubmit)="onSubmit(loginForm)" #loginForm="ngForm">
          <h2 class="text-center mb-1 fw-light">
            Login As <span class="fw-bold text-success">USER</span>
          </h2>
          <div class="form-group py-4">
            <label for="email" class="pb-1">Email address</label>
            <input
              type="email"
              [(ngModel)]="user.email"
              name="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
              required
              email
              #email="ngModel"
            />
            <div *ngIf="email.invalid && email.touched" class="text-danger">
              <small *ngIf="email.errors?.['required']"
                >Email is required.</small
              >
              <small *ngIf="email.errors?.['email']"
                >Please enter a valid email.</small
              >
            </div>
          </div>
          <div class="form-group py-1">
            <label for="password" class="pb-1">Password</label>
            <input
              type="password"
              [(ngModel)]="user.password"
              name="password"
              class="form-control"
              id="password"
              placeholder="Password"
              required
              minlength="6"
              #password="ngModel"
            />
            <div
              *ngIf="password.invalid && password.touched"
              class="text-danger"
            >
              <small *ngIf="password.errors?.['required']"
                >Password is required.</small
              >
              <small *ngIf="password.errors?.['minlength']"
                >Password must be at least 6 characters long.</small
              >
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-success btn-block my-3 w-100"
            [disabled]="!loginForm.valid"
          >
            Login
          </button>
          <!-- <div class="text-center mt-3">
            <a
              href="#"
              routerLink="/login/forgot-password"
              class="text-decoration-none text-success-emphasis"
              >Forgot password?</a
            >
          </div> -->
          <div class="text-center mt-2">
            <p class="text-body">
              Don't have an account?
              <a
                class="text-decoration-none text-success border-bottom  fw-semibold"
                routerLink="/register/user"
                >Register here</a
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [
    `
      .login-page {
        height: 100vh; /* Full height for the page */
      }

      .login-image {
        background: url('/assets/loginPage.jpg') no-repeat center center; /* Absolute path */
        background-size: cover;
      }
    `,
  ],
})
export class UserloginComponent {

  notyf = new Notyf();
  user = {
    email: '',
    password: '',
  };

  isAdmin: boolean = false; // Default to user login

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {}

  onSubmit(form: any) {
    if (form.valid) {
      this.loginService.login(form.value).subscribe((response: any) => {
        console.log('login response', response);
        this.notyf.success('User Logged In successfully!');

        setTimeout(() => {
          this.router.navigate(['/user/dashboard']);
        }, 2000);
        
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
