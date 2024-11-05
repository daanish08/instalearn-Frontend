import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminRegService } from '../../services/admin-reg.service';

@Component({
  selector: 'app-adminregister',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="d-flex bg-body-tertiary" style="height: 580px;">
      <div class="col-md-6 register-image"></div>
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <form [formGroup]="registerForm" class="w-75" (ngSubmit)="handleAddAdmin()">
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
              formControlName="phone"
              class="form-control"
              id="phn_no"
              placeholder="Enter contact No."
            />
            <div
              *ngIf="
                registerForm.get('phone')?.touched &&
                registerForm.get('phone')?.invalid
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
            <label for="refCode" class="pb-1">Access Code</label>
            <input
              type="number"
              formControlName="refCode"
              class="form-control"
              id="ref-code"
              placeholder="Access Code"
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
export class AdminregisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private toastr: ToastrService, // Inject ToastrService
    private adminRegService: AdminRegService
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, this.contactNumberValidator]],
      password: ['', Validators.required],
      refCode: [''], // Optional field
    });
  }

  contactNumberValidator(control: AbstractControl): ValidationErrors | null {
    const valid = /^\d{10}$/.test(control.value);
    return valid ? null : { invalidContactNumber: true };
  }

  ngOnInit(): void {
    // Initialization is already done in the constructor
  }

  handleAddAdmin() {
    if (this.registerForm.valid) {
      const adminData: any = this.registerForm.value;
      console.log(adminData);
      console.log('Form Submitted', this.registerForm.value);

      this.adminRegService.registerAdmin(adminData).subscribe(
        (response: any) => {
          console.log('Registration successful:', response);
          // this.toastr.success('Registration successful!', 'Success'); // Show success toast
          this.router.navigate(['/login/admin']);
        },
        (error: any) => {
          console.error('Registration failed', error);
          // this.toastr.error('Registration failed. Please try again.', 'Error'); // Show error toast
        }
      );
    }
  }
  resetForm() {
    this.registerForm.reset();
  }
}
