import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-developers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="row mb-2">
    <div class="col-md-12 px-5" *ngFor="let developer of developerData">
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    <div class="col-auto d-none d-lg-block">
    <img src="{{developer.profile}}" class="bd-placeholder-img" width="200" height="200" alt="Thumbnail" />
</div>

        <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary-emphasis py-1">{{developer.company}}</strong>
            <h3 class="mb-0">{{developer.name}}</h3>
            <div class="mb-1 text-body-secondary pb-3">{{developer.title}}</div>
            <p class="card-text mb-auto">{{developer.description}}</p>
        </div>
    </div>
</div>

  </div>
  `,
  styles: ``
})
export class DevelopersComponent {

  developerData = [
    {
      profile: "/assets/loginPage.jpg",
      name: "Mohammed Daanish M",
      title: "Software Engineer",
      company: "Ford Motors Company",
      description: "Some small hints"
    },
    {
      profile: "/assets/loginPage.jpg",
      name: "Vignesh ",
      title: "Software Engineer",
      company: "Ford Motors Company",
      description: "Some small hints"
    },
    {
      profile: "/assets/loginPage.jpg",
      name: "Tharun",
      title: "Software Engineer",
      company: "Ford Motors Company",
      description: "Some small hints"
    },
    {
      profile: "/assets/loginPage.jpg",
      name: "Suriya",
      title: "Software Engineer",
      company: "Ford Motors Company",
      description: "Some small hints"
    }
  ]

}
