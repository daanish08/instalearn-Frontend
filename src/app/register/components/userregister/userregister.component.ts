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

@Component({
  selector: 'app-userregister',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="d-flex bg-body-tertiary" style="height: 580px;">
      <div class="col-md-6 register-image"></div>
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <form [formGroup]="registerForm" class="w-75" (ngSubmit)="onSubmit()">
          <h2 class="text-center mb-1 fw-light">
            Register As <span class="fw-bold text-success">USER</span>
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
                registerForm.get('name')?.invalid &&
                registerForm.get('name')?.touched
              "
              class="text-danger"
            >
              Name is required
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
                registerForm.get('email')?.invalid &&
                registerForm.get('email')?.touched
              "
              class="text-danger"
            >
              Valid email is required
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
                registerForm.get('contact')?.invalid &&
                registerForm.get('contact')?.touched
              "
              class="text-danger"
            >
              Contact number is required
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
                registerForm.get('password')?.invalid &&
                registerForm.get('password')?.touched
              "
              class="text-danger"
            >
              Password is required
            </div>
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
  styles: [
    `
      .register-page {
        height: 100vh;
      }
      .register-image {
        background: url('/assets/RegisterPage.jpg') no-repeat center center;
        background-size: cover;
      }
    `,
  ],
})
export class UserregisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['',[Validators.required, this.contactNumberValidator]],
      password: ['', Validators.required],
    });
  }

  contactNumberValidator(control: AbstractControl): ValidationErrors | null {
    const valid = /^\d{10}$/.test(control.value);
    return valid ? null : { invalidContactNumber: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      console.log('Form Data:', formData);
      // Handle form submission logic here, possibly sending data to a server
    }
  }
}
