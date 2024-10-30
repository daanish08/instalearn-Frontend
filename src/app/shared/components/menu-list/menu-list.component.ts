import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent {

  menus = [
    { title: "Home", url: "/" },
    { title: "Courses", url: "/courses" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Login", url: "/login" },
    { title: "Register", url: "/register" },
  ];

}
