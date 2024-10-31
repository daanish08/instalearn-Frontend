import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { DevelopersComponent } from "../developers/developers.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent, DevelopersComponent, CommonModule],
  template: `
  <div class="bg-about px-3">
  <div class="px-4 py-5 my-3 mt-0 text-center text-white ">
    <h1 class="display-3 text-white pb-5 fw-light">
      About
    </h1>
    <h3 class="display-5 text-white pb-5 fw-semibold">We are an online language learning community lorem ipsum dolor sit amet.</h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
      class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
      <path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
    </svg>
    <i class="bi bi-arrow-down-circle-fill"></i>
  </div>
</div>
  <div class="container-fluid">
  <!-- Main Content -->
  <div id="content" class="site-content py-5">
    <div class="container">
      <main id="main" class="site-main p-4">
        <article class="mb-5 pt-3">
          
          <div class="mb-5">
            <h6 class="text-danger text-center fw-light pb-2">About us</h6>
            <h2 class="fw-bold  text-center">We connect students and teachers <br>lorem ipsum dolor sit amet,<br> consectetur. </h2>
            <!-- <span class=""><hr></span> -->
           
            <p class="lead">
              <span class="fs-5 ">E</span>xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
            </p>
          </div>


          <div class="d-flex" >
          <div class="mb-5" *ngFor="let MissionVision of MissionVisions">
            <h6  class="text-danger text-left fw-light pb-2">{{MissionVision.head}}</h6>
            <h3>{{MissionVision.description}}</h3>
          </div>
          </div>

          
          <div class="mb-5">
            <img  src="https://websitedemos.net/language-tutors-02/wp-content/uploads/sites/700/2020/09/about-us-01-free-img.jpg" alt="About Image" class="img-fluid rounded">
          </div>
        </article>

        <app-developers></app-developers>
      </main>
    </div>
  </div>
</div>

    
  `,
  styles: `
  .bg-about{
      background-image: url('https://websitedemos.net/language-tutors-02/wp-content/uploads/sites/700/2020/09/bg-06-free-img.jpg');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      height: 80vh;
      position: relative;
}

h2{
  font-size:50px
}
h1{
  font-size: 75px;
}
`
})
export class AboutComponent {
  MissionVisions = [
    {
      head: 'Our Mission',
      description: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt.'
    },
    {
      head: 'Our Vision',
      description: 'Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
    }
  ]

}
