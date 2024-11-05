import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  template: `
    <div class="login-page d-flex bg-body-tertiary" style="height: 580px;">
      <div class="col-md-6 login-image"></div>
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <form class="w-75" #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)">
          <h2 class="text-center mb-1 fw-light">
            Login As <span class="fw-bold text-success">ADMIN</span>
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
              #emailModel="ngModel"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
            />
            <div
              *ngIf="emailModel.invalid && emailModel.touched"
              class="text-danger"
            >
              <div *ngIf="emailModel.errors?.['required']">
                Email is required.
              </div>
              <div *ngIf="emailModel.errors?.['pattern']">
                Please enter a valid email address.
              </div>
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
              #passwordModel="ngModel"
            />
            <div
              *ngIf="passwordModel.invalid && passwordModel.touched"
              class="text-danger"
            >
              Password is required.
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-success btn-block my-3 w-100"
            [disabled]="loginForm.invalid"
          >
            Login
          </button>
          <div class="text-center mt-3">
            <a
              href="#"
              routerLink="/login/forgot-password"
              class="text-decoration-none text-secondary"
              >Forgot password?</a
            >
          </div>
          <div class="text-center mt-2">
            <p class="text-body">
              Don't have an account?
              <a
                href="#"
                class="text-decoration-none text-secondary"
                routerLink="/register/admin"
                >Register here</a
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: `
    .login-page {
      height: 100vh; /* Full height for the page */
    }

    .login-image {
      background: url('/assets/loginPage.jpg') no-repeat center center; /* Absolute path */
      background-size: cover;
    }
  `,
})
export class AdminloginComponent {
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
      this.loginService.login(this.user).subscribe((response: any) => {
        this.router.navigate(['/admin/dashboard']);
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
