import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../../shared/components/footer/footer.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  courses = [
    { title: 'Course 1', description: 'Course 1 description goes here.' },
    { title: 'Course 2', description: 'Course 2 description goes here.' },
    { title: 'Course 3', description: 'Course 3 description goes here.' },
    { title: 'Course 4', description: 'Course 4 description goes here.' },
    { title: 'Course 5', description: 'Course 5 description goes here.' },
    { title: 'Course 6', description: 'Course 6 description goes here.' },
  ];
}
