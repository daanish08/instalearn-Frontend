import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feedback-details',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  template: `
   <div class="container-fluid mt-4 px-5">
<h2 class="text-left fw-light">Approve <span class="fw-semibold text-success">Enrollment Status</span>
    <hr>
  </h2>

  <table class="table table-bordered mt-4 table-hover">
    <thead class="table-success " style="color:blue">
        <tr>
            <th>Feedback ID</th>
            <th>Name</th>
            <th>Phone No.</th>
            <th>Description</th>
            <th>Type</th>
        </tr>
    </thead>
    <tbody >
        <tr *ngFor="let feedback of feedbacks">
            <td>{{ feedback.feedbackId }}</td>
            <td>{{ feedback.name }}</td>
            <td>{{ feedback.contact }}</td>
            <td>{{ feedback.comment }}</td>
            <td>{{ feedback.enquiryType }}</td>
            </tr>
    </tbody>
</table>

</div>
  `,
  styles: ``
})
export class FeedbackDetailsComponent {

  feedbacks: any[] = [
    {
      "feedbackId": 1,
      "name": "John Doe",
      "contact": "123-456-7890",
      "comment": "Inquiry about online courses.",
      "enquiryType": "Course Information",
      "display": true
    },
    {
      "feedbackId": 2,
      "name": "Jane Smith",
      "contact": "987-654-3210",
      "comment": "Need help with registration.",
      "enquiryType": "Registration Assistance",
      "display": false 
    },
    {
      "feedbackId": 3,
      "name": "Peter Jones",
      "contact": "555-123-4567",
      "comment": "Question about payment options.",
      "enquiryType": "Payment Inquiry",
      "display": true
    }
  ]
  ;


}
