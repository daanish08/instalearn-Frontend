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
    { logo: 'C1', title: 'Course 1', description: 'Course 1 description goes here.' },
    { logo: 'C2', title: 'Course 2', description: 'Course 2 description goes here.' },
    { logo: 'C3', title: 'Course 3', description: 'Course 3 description goes here.' },
    { logo: 'C4', title: 'Course 4', description: 'Course 4 description goes here.' },
    { logo: 'C5', title: 'Course 5', description: 'Course 5 description goes here.' },
    { logo: 'C6', title: 'Course 6', description: 'Course 6 description goes here.' },
    { logo: 'C4', title: 'Course 4', description: 'Course 4 description goes here.' },
    { logo: 'C5', title: 'Course 5', description: 'Course 5 description goes here.' },
    { logo: 'C6', title: 'Course 6', description: 'Course 6 description goes here.' },
     { logo: 'C4', title: 'Course 4', description: 'Course 4 description goes here.' },
    { logo: 'C5', title: 'Course 5', description: 'Course 5 description goes here.' },
    { logo: 'C6', title: 'Course 6', description: 'Course 6 description goes here.' },
     { logo: 'C4', title: 'Course 4', description: 'Course 4 description goes here.' },
    { logo: 'C5', title: 'Course 5', description: 'Course 5 description goes here.' },
    { logo: 'C6', title: 'Course 6', description: 'Course 6 description goes here.' },
  ];

  stepstoFindCourse=[
    {
      id:1,
      head:"Find the perfect tutor",
      description:"Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur."
    },
    {
      id:2,
      head:"Enroll your lesson",
      description:"Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur."
    },{
      id:3,
      head:"Start the journey",
      description:"Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur."
    },
  ]

 // features
features = [
  {
    imgTag: "/assets/img/Home/graduate.png",
    title: "Expert Tutors",
    description: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
  {
    imgTag: "/assets/img/Home/graduate.png",
    title: "Verified Profiles",
    description: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
  {
    imgTag: "/assets/img/Home/graduate.png",
    title: "Pay Per Lesson",
    description: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
  {
    imgTag: "/assets/img/Home/graduate.png",
    title: "Affordable Prices",
    description: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  }
];

getAssetPath(filename: string): string {
  return `assets/home/${filename}`;
}

}
