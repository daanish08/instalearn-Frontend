import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../../services/contact-service/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="bg-about px-3">
      <div class="px-4 py-5 my-3 mt-0 text-center text-white ">
        <h1 class="display-3 text-white pb-5 fw-light">Contact</h1>
        <h3 class="display-5 text-white pb-5 fw-semibold">
          Join our vibrant online language learning community and connect with
          us
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-arrow-down-circle-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
          />
        </svg>
        <i class="bi bi-arrow-down-circle-fill"></i>
      </div>
    </div>
    <div class="container mt-5">
      <h2 class="text-left fw-light">
        For any <span class="fw-semibold text-success">Media</span> and
        <span class="fw-semibold text-success">Business</span> inquiries
        <hr class="pb-2" />
      </h2>
      <p>
        Send us a message below or email us at
        <a href="mailto:contact@info.com">contact&#64;info.com</a>
      </p>
      <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            ngModel
            placeholder="Your Name"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label for="contact">Contact Info</label>
          <input
            type="text"
            class="form-control"
            id="contact"
            name="contact"
            ngModel
            placeholder="Email or Phone"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label for="comment">Message</label>
          <textarea
            class="form-control"
            id="comment"
            name="comment"
            ngModel
            rows="4"
            required
          ></textarea>
        </div>
        <br />
        <div class="form-group">
          <label for="enquiryType">What is this about</label>
          <select
            class="form-control"
            id="enquiryType"
            name="enquiryType"
            ngModel
            required
          >
            <option>Feedback</option>
            <option>Query</option>
            <option>Help</option>
            <!-- Add more options as needed -->
          </select>
        </div>
        <br />
        <button
          type="submit"
          class="btn btn-success"
          [disabled]="contactForm.invalid"
        >
          Submit
        </button>
      </form>
    </div>
  `,
  styles: [
    `
      .bg-about {
        background-image: url('https://websitedemos.net/language-tutors-02/wp-content/uploads/sites/700/2020/09/bg-002-free-img.jpg');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        height: 100vh;
        position: relative;
      }
    `,
  ],
})
export class ContactComponent {
  constructor(private contactService: ContactService,private router:Router) {}

  onSubmit(contactForm: NgForm) {
    console.log('form', contactForm.value);

    this.contactService
      .handleAddFeedbacks(contactForm.value)
      .subscribe((response) => {
        console.log(response);
        setTimeout(() => {
          this.router.navigate(['admin/dashboard']);
        }, 2000);
      });
  }
}
