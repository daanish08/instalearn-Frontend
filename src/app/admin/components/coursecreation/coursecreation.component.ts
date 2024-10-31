import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-coursecreation',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './coursecreation.component.html',
  styleUrl: './coursecreation.component.css'
})
export class CoursecreationComponent {
 // Step 1 variables
 courseName: string = '';
 description: string = '';
 duration: number = 0;
 instructor: string = '';
 smallContent: string = '';

 // Step 2 variables
 fileName: string = '';
 fileLocation: string = '';

 currentStep: number = 1; // Current step of the form
 progress: number = 50; // Progress in percentage

 isLoading: boolean = false; // Loading state
 isSuccess: boolean = false; // Success state

 nextStep() {
     if (this.currentStep === 1) {
         this.currentStep = 2; // Move to the attachment step
         this.progress = 100; // Update progress (you can adjust this)
     }
 }

 prevStep() {
     if (this.currentStep === 2) {
         this.currentStep = 1; // Move back to the first step
         this.progress = 50; // Update progress
     }
 }

 submitCourse() {
     const courseData = {
         name: this.courseName,
         description: this.description,
         duration: this.duration,
         instructor: this.instructor,
         smallContent: this.smallContent,
         attachments: {
             fileName: this.fileName,
             fileLocation: this.fileLocation
         }
     };

  //    this.isLoading = true; // Set loading state to true
  //    this.isSuccess = false; // Reset success state

  //    this.apiService.uploadCourse(courseData).subscribe(response => {
  //     console.log('Course created successfully:', response);
  //     this.isLoading = false; // Set loading state to false
  //     this.isSuccess = true; // Set success state to true
      
  //     // Redirect to dashboard after a brief delay
  //     setTimeout(() => {
  //         this.router.navigate(['/admin/dashboard']); // Redirect to the dashboard
  //     }, 2000); // Delay for 2 seconds to show the success message
  // }, error => {
  //     console.error('Error creating course:', error);
  //     this.isLoading = false; // Set loading state to false
  //     // Handle error (e.g., show an error message)
  // });

    //  // Call your API to create the course
    //  this.apiService.uploadCourse(courseData).subscribe(response => {
    //      console.log('Course created successfully:', response);
    //      // Handle success (e.g., redirect or show a message)
    //  }, error => {
    //      console.error('Error creating course:', error);
    //      // Handle error (e.g., show an error message)
    //  });
 }

}
