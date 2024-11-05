import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-developers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="row mb-2">
      <div class="col-md-12 px-5" *ngFor="let developer of developerData">
        <div
          class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
        >
          <div class="col-auto d-none d-lg-block">
            <img
              src="{{ developer.profile }}"
              class="bd-placeholder-img"
              width="200"
              height="200"
              alt="Thumbnail"
            />
          </div>

          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary-emphasis py-1">{{
              developer.company
            }}</strong>
            <h3 class="mb-1 fs-2">{{ developer.name }}</h3>
            <div class="mb-1 fs-4 text-body-secondary pb-3">
              {{ developer.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class DevelopersComponent {
  developerData = [
    {
      profile: '/assets/img/vectorIcons/profile-logo.png',
      name: 'Mohammed Daanish M',
      title: 'Software Engineer',
      company: 'Ford Motors Company',
    },
    {
      profile: '/assets/img/vectorIcons/profile-logo.png',
      name: 'Vignesh U',
      title: 'Software Engineer',
      company: 'Ford Motors Company',
    },
    {
      profile: '/assets/img/vectorIcons/profile-logo.png',
      name: 'Tharun D',
      title: 'Software Engineer',
      company: 'Ford Motors Company',
    },
    {
      profile: '/assets/img/vectorIcons/profile-logo.png',
      name: 'Suriya T',
      title: 'Software Engineer',
      company: 'Ford Motors Company',
    },
  ];
}
