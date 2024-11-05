import { DatePipe } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { LoginService } from '../../../login/services/login.service';
import { UserServiceService } from '../../../user/services/user-service/user-service.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CourseServiceService } from '../../services/courses/course-service.service';

@Component({
  selector: 'app-course-completion-details',
  standalone: true,
  imports: [DatePipe],
  template: `
    <div class="container-fluid mt-2 p-3">
      <div id="certificate" class="certificate bg-tertiary py-4">
        <div class="certificate-border py-3">
          <div class="p-4 border border-black">
            <img
              src="https://www.ford.com/etc/designs/brand_ford/brand/skin/ford/img/bri-icons/Ford-logo.svg"
              alt=""
              width="150"
              height="50"
            />
            <h1 class="fw-light pb-2">
              <span class="text-success">Certificate</span> of Completion
            </h1>
            <p>This is to certify that</p>
            <h2>{{ userName }}</h2>
            <p>has successfully completed the course</p>
            <h4>{{ courseName }}</h4>
            <!-- Add Date and Signature -->
            <div class="certificate-footer">
              <div class="footer-item ">
                <p>
                  <span class="underline">{{
                    completionDate | date : 'dd.MM.yyyy'
                  }}</span>
                </p>
                <hr />
                <p class="text-muted">Date</p>
              </div>
              <div class="footer-item">
                <p>
                  <span class="underline">{{ signature }}</span>
                </p>
                <hr />
                <p class="text-muted">Signature</p>
                <!-- If using a placeholder or static text -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center py-3">
        <button
          class="btn btn-success fw-light text-white"
          (click)="generateCertificate()"
        >
          Download Certificate
        </button>
      </div>
    </div>
  `,
  styles: `
 .certificate {
  width: 800px;
  height: 550px;
  margin: 0 auto;
  padding: 25px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow for depth */
}

.certificate-border {
  padding: 20px;
}

.certificate h1 {
  font-size: 40px;
  color: #003366;
}

.certificate h2 {
  font-size: 28px;
  color: #990000;
}

.certificate h3, .certificate h4 {
  font-size: 24px;
  color: #003366;
}

.certificate p {
  font-size: 18px;
  color: #333;
}

.certificate-footer {
  display: flex;
  justify-content: space-around; /* Evenly distribute space between items */
  align-items: center; /* Align items vertically centered */
  margin-top: 40px;
  padding: 0 40px;
}

.footer-item {
  text-align: center;
  flex: 1; /* Allows items to grow equally */
}

.underline {
  font-weight: bold; /* Optional: Make the text bold for emphasis */
}

.footer-item p {
  margin: 5px 0;
}


`,
})
export class CourseCompletionDetailsComponent implements OnInit {
  userId: string | null = '';
  IntId: number = 0;
  userName: string = '';
  courseId:number=0;
  courseName:string='';


  private userSubscription: Subscription | undefined;
  private courseSubscription: Subscription | undefined;

  ngOnInit(): void {
    console.log('init');
    this.userId = this.loginService.auth.id;
    this.IntId = Number(this.userId);
    this.courseId = Number(this.route.snapshot.paramMap.get('courseId'));
    this.loadDetails();
  }

  loadDetails() {
    console.log(this.userId);
    console.log(this.IntId);

    if (this.IntId) {
      // Check if userId is not null or empty
      this.userSubscription = this.userService
        .getUserName(this.IntId)
        .subscribe({
          next: (response: any) => {
            this.userName = response.userName;
            console.log('-------', this.userName);
          },
        });
    }

    if(this.courseId){
      this.courseSubscription = this.courseService
        .getcourseDetailsById(this.courseId)
        .subscribe({
          next: (response: any) => {
            this.courseName = response.courseName;
            console.log('-------', this.courseName);
          },
        });
    }
  }

  constructor(
    private loginService: LoginService,
    private userService: UserServiceService,
    private route:ActivatedRoute,
    private courseService:CourseServiceService
  ) {}

  // courseName: string = 'Advanced Angular Development';
  completionDate: Date = new Date();
  signature = 'FORD';

  generateCertificate() {
    const certificateElement = document.getElementById('certificate');

    if (certificateElement) {
      html2canvas(certificateElement).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('landscape', 'px', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${this.userName}_Certificate.pdf`);
      });
    }
  }
}
