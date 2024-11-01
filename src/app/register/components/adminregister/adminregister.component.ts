import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminregister',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="d-flex bg-body-tertiary" style="height: 580px;">
      <div class="col-md-6 register-image"></div>
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <form [formGroup]="registerForm" class="w-75" (ngSubmit)="onSubmit()">
          <h2 class="text-center mb-1 fw-light">
            Register As <span class="fw-bold text-success">ADMIN</span>
          </h2>

          <div class="form-group py-2">
            <label for="name" class="pb-1">Name</label>
            <input
              type="text"
              formControlName="name"
              class="form-control"
              id="name"
              placeholder="Enter name"
            />
            <div
              *ngIf="
                registerForm.get('name')?.touched &&
                registerForm.get('name')?.invalid
              "
              class="text-danger"
            >
              Name is required.
            </div>
          </div>

          <div class="form-group py-2">
            <label for="email" class="pb-1">Email address</label>
            <input
              type="email"
              formControlName="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
            />
            <div
              *ngIf="
                registerForm.get('email')?.touched &&
                registerForm.get('email')?.invalid
              "
              class="text-danger"
            >
              Valid email is required.
            </div>
          </div>

          <div class="form-group py-2">
            <label for="phone" class="pb-1">Contact No.</label>
            <input
              type="text"
              formControlName="contact"
              class="form-control"
              id="cnt_no"
              placeholder="Enter contact No."
            />
            <div
              *ngIf="
                registerForm.get('contact')?.touched &&
                registerForm.get('contact')?.invalid
              "
              class="text-danger"
            >
              Contact number must be exactly 10 digits.
            </div>
          </div>

          <div class="form-group py-1">
            <label for="password" class="pb-1">Password</label>
            <input
              type="password"
              formControlName="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
            <div
              *ngIf="
                registerForm.get('password')?.touched &&
                registerForm.get('password')?.invalid
              "
              class="text-danger"
            >
              Password is required.
            </div>
          </div>

          <div class="form-group py-2">
            <label for="refCode" class="pb-1">Referral Code (Optional)</label>
            <input
              type="number"
              formControlName="refCode"
              class="form-control"
              id="ref-code"
              placeholder="Referral Code"
            />
          </div>

          <button
            type="submit"
            class="btn btn-block my-3 w-100 text-white fw-semibold"
            style="background-color:green"
            [disabled]="registerForm.invalid"
          >
            Register
          </button>
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
  }`,
})
export class AdminregisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, this.contactNumberValidator]],
      password: ['', Validators.required],
      refCode: [''], // Optional field
    });
  }

  contactNumberValidator(control: AbstractControl): ValidationErrors | null {
    const valid = /^\d{10}$/.test(control.value);
    return valid ? null : { invalidContactNumber: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
      // Navigate to the admin login page
      this.router.navigate(['/login/admin']);
    }
  }
}
