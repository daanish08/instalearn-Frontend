import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-course-completion-details',
  standalone: true,
  imports: [],
  template: `
   <div class="container-fluid mt-5 px-5">
   <div id="certificate" class="certificate bg-tertiary">
  <div class="certificate-border  ">
  <!-- <img src="/assets/CompletedLogo.png" alt="" width="150" height="130">    -->
  <h1 class="fw-light pb-2"><span class=" text-success">Certificate </span>of Completion</h1>
    <p>This is to certify that</p>
    <h2>{{ username }}</h2>
    <p>has successfully completed the course</p>
    <h4>{{ courseTitle }}</h4>
    <!-- <p>Congratulations!</p> -->
      </div>
</div>
<div class="text-center py-3">
  <button class="btn btn-success fw-light text-white" (click)="generateCertificate()">Download Certificate</button>
</div>

  </div>
  `,
  styles: `
  /* certificate.component.css */
.certificate {
  width: 800px;
  height:800px;
  margin: 0 auto;
  padding: 5px;
  text-align: center;
  border: 2px solid #000;
  border-radius: 10px;
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

.certificate h3 {
  font-size: 24px;
  color: #003366;
}

.certificate p {
  font-size: 18px;
  color: #333;
}
`
})
export class CourseCompletionDetailsComponent {

  courseTitle: string = 'Advanced Angular Development';
  username: string = 'John Doe';

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
        pdf.save(`${this.username}_Certificate.pdf`);
      });
    }
  }
}
